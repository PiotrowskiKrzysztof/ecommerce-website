import get from "lodash/get";
import set from "lodash/set";
import getDocuments from "@setup/sanity/getDocuments";

import { BASE_FIELDS, REFERENCE_FIELDS_MAP } from "./const";

import type { SanityDocument } from "@sanity/client";

const selectFields = (doc: SanityDocument, fields: string[]) => {
  if (!doc || typeof doc !== "object" || !Array.isArray(fields)) {
    return doc;
  }

  return fields.reduce((acc, fieldPath) => {
    const fieldValue = get(doc, fieldPath);

    if (fieldValue === undefined || fieldValue === null) {
      return acc;
    }

    return set({ ...acc }, fieldPath, fieldValue);
  }, {});
};

const resolveReferences = (
  content: unknown,
  maxDepth: number,
  docs: SanityDocument[],
  fields: string[]
) => {
  if (typeof content !== "object" || content === null) {
    return;
  }

  if (Array.isArray(content)) {
    content.forEach((item) =>
      resolveReferences(item, maxDepth, docs, fields)
    );

    return;
  }

  const objectContent = content as Record<string, unknown>;
  const { _ref } = objectContent;
  let foundDoc = false;

  if (_ref && maxDepth > 0) {
    const matchingDoc = docs.find((doc) => doc._id === _ref);

    if (matchingDoc) {
      Object.keys(objectContent).forEach((key) => {
        delete objectContent[key];
      });

      const docClone = JSON.parse(
        JSON.stringify(matchingDoc)
      ) as SanityDocument;

      const fieldsToCopy =
        docClone._type in REFERENCE_FIELDS_MAP
          ? [
              ...get(REFERENCE_FIELDS_MAP, docClone._type, []),
              ...(fields ?? [])
            ]
          : [...BASE_FIELDS, ...(fields ?? [])];

      Object.assign(content, selectFields(docClone, fieldsToCopy));

      foundDoc = true;
    }
  }

  Object.values(content).forEach((value) =>
    resolveReferences(
      value,
      maxDepth - (foundDoc ? 1 : 0),
      docs,
      fields
    )
  );
};

export const resolveBlockContentReferences = async (
  content: unknown,
  maxDepth: number,
  fields: string[]
) => {
  const contentClone = JSON.parse(JSON.stringify(content));
  const docs = await getDocuments();

  if (!docs || maxDepth < 1) {
    return contentClone;
  }

  resolveReferences(contentClone, maxDepth, docs, fields);

  return contentClone;
};

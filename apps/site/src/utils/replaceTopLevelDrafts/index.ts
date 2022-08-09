import type { SanityDocument } from "@sanity/client";

const replaceTopLevelDrafts = (
  data: Record<
    string,
    SanityDocument | Array<SanityDocument | null> | null
  >
): void => {
  Object.entries(data).forEach(([key, value]) => {
    if (!Array.isArray(value)) {
      return;
    }

    /* eslint-disable no-param-reassign */
    data[key] = value.reduce<SanityDocument[]>((result, item) => {
      if (!item || typeof item._id !== "string") {
        return result;
      }

      const { _id } = item || {};

      if (_id.startsWith("drafts.")) {
        return [...result, item];
      }

      const draft = value.find(
        (valueItem) => valueItem?._id === `drafts.${_id}`
      );

      if (!draft) {
        return [...result, item];
      }

      return [...result, draft];
    }, []);
  });
};

export default replaceTopLevelDrafts;

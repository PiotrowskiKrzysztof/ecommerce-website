import { introspectSchema, wrapSchema } from "@graphql-tools/wrap";
import { print } from "graphql";

import rawFieldsResolver from "./rawFieldsResolver";
import { SANITY_API_URL } from "./consts";

import type { GraphQLSchema } from "graphql";
import type { AsyncExecutor } from "@graphql-tools/utils";

const makeRemoteExecutor = ({
  url,
  requestConfig
}: {
  url: string;
  requestConfig?: RequestInit;
}): AsyncExecutor => {
  const executor: AsyncExecutor = async ({
    document,
    variables,
    context
  }) => {
    const query = print(document);
    const fetchResult = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      ...requestConfig,
      headers: {
        "Content-Type": "application/json",
        ...(requestConfig?.headers || {}),
        ...(context?.headers || {})
      }
    });
    const responseJson = await fetchResult.json();

    return responseJson;
  };

  return executor;
};

export const makeSchema = async (): Promise<GraphQLSchema> => {
  const schemaExecutor = makeRemoteExecutor({
    url: SANITY_API_URL
  });
  const originalSchema = await introspectSchema(schemaExecutor);

  return wrapSchema({
    schema: originalSchema,
    executor: schemaExecutor,
    transforms: [rawFieldsResolver]
  });
};

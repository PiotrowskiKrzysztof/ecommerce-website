import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { IS_PRODUCTION } from "@setup/environment";

import { makeSchema } from "./utils";

import type { NormalizedCacheObject } from "@apollo/client";

const makeApolloClient = async (): Promise<
  ApolloClient<NormalizedCacheObject>
> => {
  const schema = await makeSchema();

  return new ApolloClient({
    link: new SchemaLink({
      schema,
      context: ({ getContext }) => getContext()
    }),
    cache: new InMemoryCache(),
    defaultOptions: !IS_PRODUCTION
      ? {
          query: {
            fetchPolicy: "no-cache"
          }
        }
      : undefined
  });
};

export const APOLLO_CLIENT = makeApolloClient();

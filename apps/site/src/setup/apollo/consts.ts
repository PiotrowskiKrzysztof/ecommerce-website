import {
  SANITY_DATASET,
  SANITY_PROJECT_ID,
  SANITY_GRAPHQL_TAG
} from "@setup/environment";

export const SANITY_API_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${SANITY_DATASET}/${SANITY_GRAPHQL_TAG}`;

export const DOCUMENT_CACHE_AGE =
  process.env.NODE_ENV !== "production" ? 10 * 1000 : undefined;

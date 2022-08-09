/**
 * SANITY_PROJECT_ID (Required)
 * @desc The Sanity's project ID (can be found on sanity.io)
 * @type String
 * @example 8eppir41
 */
const SANITY_PROJECT_ID = (() => {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    throw new Error(
      "Missing environment variable - NEXT_PUBLIC_SANITY_PROJECT_ID"
    );
  }

  return process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
})();

/**
 * SANITY_DATASET (Required)
 * @desc The Sanity's dataset name (can be found on sanity.io)
 * @type String
 * @example production
 */
const SANITY_DATASET = (() => {
  if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
    throw new Error(
      "Missing environment variable - NEXT_PUBLIC_SANITY_DATASET"
    );
  }

  return process.env.NEXT_PUBLIC_SANITY_DATASET;
})();

/**
 * SANITY_GRAPHQL_TAG
 * @desc Sanity GraphQL tag - https://www.sanity.io/docs/graphql#e2e900be2233
 * @type String
 * @example j8heapkqy4rdz6kudrvsc7ywpvfhrv022abyx5zgmuwpc1xv
 * @default default
 */
const SANITY_GRAPHQL_TAG = (() =>
  process.env.SANITY_GRAPHQL_TAG || "default")();

/**
 * IS_PRODUCTION
 * @desc True if the NODE_ENV === "production"
 * @type Boolean
 * @example false
 */
const IS_PRODUCTION = (() => process.env.NODE_ENV === "production")();

module.exports = {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_GRAPHQL_TAG,
  IS_PRODUCTION
};

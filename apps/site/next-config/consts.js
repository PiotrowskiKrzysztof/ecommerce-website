const {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_GRAPHQL_TAG
} = require("../src/setup/environment");

const APOLLO_CODEGEN_OPTS = {
  output: "operationTypes",
  target: "typescript",
  globalTypesFile: "src/setup/apollo/operationTypes/globalTypes.d.ts",
  endpoint: `https://${SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${SANITY_DATASET}/${SANITY_GRAPHQL_TAG}`,
  includes: ["./src/**/*.ts", "./src/**/*.tsx"],
  excludes: ["./src/components/sections/fragment.ts"],
  passthroughCustomScalars: true,
  customScalarsPrefix: "SanityGQL",
  tsFileExtension: "d.ts"
};

module.exports = {
  APOLLO_CODEGEN_OPTS
};

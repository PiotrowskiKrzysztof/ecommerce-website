/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv-extended").load();
const genTypes = require("../next-config/webpack/plugins/apollo-codegen-webpack-plugin/genTypes");
const { APOLLO_CODEGEN_OPTS } = require("../next-config/consts");

genTypes(APOLLO_CODEGEN_OPTS);

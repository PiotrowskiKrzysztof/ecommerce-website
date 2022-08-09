
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv-extended").load();
const fs = require("fs");

const template = require("lodash/template");

const sanityConfigTemplateFileContent = fs.readFileSync(
  "./sanity.template.json"
);
const sanityConfigTemplate = template(
  sanityConfigTemplateFileContent
);

fs.writeFileSync("./sanity.json", sanityConfigTemplate(global));

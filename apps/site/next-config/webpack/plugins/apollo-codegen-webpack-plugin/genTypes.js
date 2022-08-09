/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const glob = require("glob");
const fs = require("fs-extra");

const exec = require("./exec");

const genTypes = (options) => {
  const {
    critical: _,
    skipSSLValidation: __,
    ...restOptions
  } = options;

  const command = Object.keys(restOptions).reduce((acc, option) => {
    if (option === "output") return acc;
    if (restOptions[option] === true) return `${acc} --${option}`;

    return `${acc} --${option}="${restOptions[option]}"`;
  }, `client:codegen ${restOptions.output ? restOptions.output : ""}`);

  const files = glob.sync(
    `./**/!(node_modules)/${restOptions.output}/**.ts`
  );

  return Promise.all(
    files.map((filePath) => fs.unlink(path.resolve(filePath)))
  ).then(() =>
    exec("Generating types", command).catch(() => {
      if (options.critical) {
        process.exit(1);
      }
    })
  );
};

module.exports = genTypes;

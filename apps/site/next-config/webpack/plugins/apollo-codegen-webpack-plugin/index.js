/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-var-requires */
const minimatch = require("minimatch");

const fetchSchema = require("./fetchSchema");
const genTypes = require("./genTypes");

class ApolloCodegenWebpackPlugin {
  constructor(options) {
    this.id = "ApolloWebpackPlugin";
    this.options = options;
    this.prevTimestamps = {};
    this.schemaFetched = false;
  }

  hasChanged(compilation) {
    const timestamps = {};

    if (
      !compilation.fileTimestamps ||
      !compilation.fileTimestamps.size
    ) {
      return true;
    }

    let hasChanged = compilation.fileTimestamps.size === 0; // initial compilation

    for (const file of compilation.fileTimestamps.keys()) {
      if (
        this.options.includes.some((glob) =>
          minimatch(
            file
              .replace(compilation.options.context, ".")
              .replace(/\\/gi, "/"),
            glob
          )
        )
      ) {
        timestamps[file] = compilation.fileTimestamps.get(file);
      }
    }

    for (const file in timestamps) {
      if (
        (this.prevTimestamps[file] === undefined ||
          this.prevTimestamps[file] !== timestamps[file]) &&
        !minimatch(file, `**/${this.options.output}/**`)
      ) {
        hasChanged = true;
      }
    }

    this.prevTimestamps = timestamps;

    return hasChanged;
  }

  apply(compiler) {
    const run = (compilation) => {
      const hasChanged = this.hasChanged(compilation);

      if (!hasChanged) return Promise.resolve();

      if (!this.schemaFetched) {
        return fetchSchema(this.options).then(() => {
          this.schemaFetched = true;

          return genTypes(this.options);
        });
      }

      return genTypes(this.options);
    };

    compiler.hooks.beforeRun.tapPromise(this.id, run);
    compiler.hooks.watchRun.tapPromise(this.id, run);
  }
}

module.exports = ApolloCodegenWebpackPlugin;

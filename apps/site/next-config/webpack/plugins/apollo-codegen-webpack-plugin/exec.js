/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const cp = require("child_process");

const PrettyError = require("pretty-error");

const prettyError = new PrettyError();

const exec = async (_, command) =>
  new Promise((resolve, reject) => {
    cp.exec(
      `yarn apollo ${command}`,
      {
        stdio: "pipe"
      },
      (error, __, stderr) => {
        if (error) {
          console.log(prettyError.render(error));

          return reject();
        }

        if (
          stderr &&
          stderr.indexOf("Warning: apollo update available") === -1 &&
          !stderr.includes("DEPRECATED")
        ) {
          console.log(prettyError.render(new Error(stderr)));

          return reject();
        }

        return resolve();
      }
    );
  });

module.exports = exec;

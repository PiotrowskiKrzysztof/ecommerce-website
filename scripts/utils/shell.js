// eslint-disable-next-line @typescript-eslint/no-var-requires
const { spawn } = require("child_process");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { LINE_BREAK_REGEXP } = require("./consts");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Log = require("./log");

const runCommand = (
  command,
  {
    envs = {},
    removeNewLines = false,
    pipeStdout = true,
    pipeStderr = true
  } = {}
) =>
  new Promise((resolve, reject) => {
    Log.info(`Running command: ${command}`);

    let result = "";

    const childProcess = spawn(command, [], {
      shell: true,
      env: {
        ...process.env,
        ...envs,
        FORCE_COLOR: 1
      }
    });

    const onDataHandler = (chunk) => {
      result += chunk;
    };

    childProcess.stdout.addListener("data", onDataHandler);

    if (pipeStdout) {
      childProcess.stdout.pipe(process.stdout);
    }

    if (pipeStderr) {
      childProcess.stderr.pipe(process.stderr);
    }

    childProcess.on("exit", (code) => {
      if (pipeStdout) {
        childProcess.stdout.unpipe(process.stdout);
      }

      if (pipeStderr) {
        childProcess.stderr.unpipe(process.stderr);
      }

      childProcess.stdout.removeListener("data", onDataHandler);
      childProcess.removeAllListeners();

      if (code === 0) {
        resolve(
          removeNewLines
            ? result.replace(LINE_BREAK_REGEXP, "")
            : result
        );
      } else {
        const error = new Error(`Command "${command}" failed.`);

        error.code = code;

        reject(error);
      }
    });
  });

module.exports = {
  runCommand
};

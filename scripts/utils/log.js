/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require("chalk");

const prefixes = {
  wait: `${chalk.cyan("wait")}  -`,
  error: `${chalk.red("error")} -`,
  warn: `${chalk.yellow("warn")}  -`,
  ready: `${chalk.green("ready")} -`,
  info: `${chalk.cyan("info")}  -`,
  event: `${chalk.magenta("event")} -`,
  trace: `${chalk.magenta("trace")} -`
};

const Log = {
  wait(...message) {
    console.log(prefixes.wait, ...message);
  },

  error(...message) {
    console.error(prefixes.error, ...message);
  },

  warn(...message) {
    console.warn(prefixes.warn, ...message);
  },

  ready(...message) {
    console.log(prefixes.ready, ...message);
  },

  info(...message) {
    console.log(prefixes.info, ...message);
  },

  event(...message) {
    console.log(prefixes.event, ...message);
  },

  trace(...message) {
    console.log(prefixes.trace, ...message);
  },

  withPrefix(prefix, ...message) {
    console.log(`${chalk.cyan(prefix)}  -`, ...message);
  }
};

module.exports = Log;

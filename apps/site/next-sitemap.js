// eslint-disable-next-line @typescript-eslint/no-var-requires
const { NEXT_PUBLIC_APP_DOMAIN } = require("./src/setup/environment");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: NEXT_PUBLIC_APP_DOMAIN,
  generateRobotsTxt: true
};

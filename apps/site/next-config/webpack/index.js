/* eslint-disable @typescript-eslint/no-var-requires */
const set = require("lodash/set");
// eslint-disable-next-line import/no-extraneous-dependencies
const webpackLib = require("webpack");
// eslint-disable-next-line import/no-extraneous-dependencies

const { APOLLO_CODEGEN_OPTS } = require("../consts");

const ApolloCodegenWebpackPlugin = require("./plugins/apollo-codegen-webpack-plugin");

/** @type {import('next').NextConfig['webpack']} */
const webpack = (config, { isServer }) => {
  config.resolve.extensions.push(".d.ts");

  // Disable next image loader for svg files
  const nextImageLoader = config.module.rules.find(
    (rule) => rule.loader === "next-image-loader"
  );

  if (nextImageLoader) {
    nextImageLoader.test = /\.(png|jpg|jpeg|gif|webp|ico|bmp)$/i;
  }

  if (!isServer) {
    config.module.rules.push({
      test: /\.(tsx|ts|js|cjs|mjs|jsx)$/,
      use: [
        {
          loader: "ifdef-loader",
          options: {
            CLIENT_BUNDLE: true,
            "ifdef-verbose": true
          }
        }
      ]
    });
  }

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [
              {
                prefixIds: false
              }
            ]
          }
        }
      }
    ]
  });

  config.plugins.push(
    new ApolloCodegenWebpackPlugin(APOLLO_CODEGEN_OPTS)
  );
  config.plugins.push(
    new webpackLib.WatchIgnorePlugin({
      paths: [/operationTypes/gm]
    })
  );

  if (!isServer) {
    set(config, "resolve.fallback.fs", false);
  }

  return config;
};

module.exports = webpack;

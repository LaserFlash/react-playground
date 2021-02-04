const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const custom = require('../webpack.config.js');

module.exports = async ({ config, mode }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...custom.module.rules,
      {
        test: /\.stories\.tsx?$/,
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
  },
  resolve: {
    ...config.resolve,
    ...custom.resolve,
  },
});

const path = require('path');
const webpack = require('webpack');
// your app's webpack.config.js
const autoprefixer = require('autoprefixer');
const flexfixes = require('postcss-flexbugs-fixes');
const CopyPlugin = require('copy-webpack-plugin');
const reactDocgenLoader = require('react-docgen-typescript-loader');
const custom = require('../webpack.config.js');

module.exports = async ({ config, mode }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...custom.module.rules,
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,

        loaders: [
          {
            loader: require.resolve('react-docgen-typescript-loader'),
            options: {
              // Provide the path to your tsconfig.json so that your stories can
              // display types from outside each individual story.
              tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
            }
          },
          {
            loader: require.resolve('@storybook/source-loader')
          }
        ]
      }
    ]
  },
  resolve: custom.resolve,
  plugins: [...config.plugins, new CopyPlugin({ patterns: [{ from: 'src/assets', to: 'assets' }] })]
});

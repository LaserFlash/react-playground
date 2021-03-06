const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const flexfixes = require('postcss-flexbugs-fixes');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');

const env = process.env.npm_lifecycle_event.includes('build') ? 'production' : 'dev';
const devMode = env !== 'production';

let config = {};

// config that is shared between all types of build (dev and prod)
const common = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/site',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        enforce: 'pre', // lint files before they are transformed, config in .eslintrc.json
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: [
          {
            loader: 'prettier-loader',
            options: { parser: 'typescript' },
          },
          'eslint-loader',
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // config in .tsconfig
        options: {
          plugins: [devMode && require.resolve('react-refresh/babel')].filter(Boolean),
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer(), flexfixes()],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src')],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 1024, // will insert a data URI if filesize < 1kb otherwise uses file-loader
          fallback: 'file-loader',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env) },
    }),
    new webpack.ProvidePlugin({
      Promise: ['es6-promise', 'Promise'],
    }),
    new StyleLintPlugin({
      context: path.resolve(__dirname, 'src'),
      files: '**/*.s?(a|c)ss',
    }),
    devMode && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};

// environment specific config
switch (env) {
  case 'dev':
    config = merge(common, {
      devtool: 'cheap-module-eval-source-map',

      devServer: {
        historyApiFallback: true, // enables reloads of routed pages
        // if you need to proxy a backend server this is the place to do it:
        // see https://webpack.js.org/configuration/dev-server/#devserver-proxy
      },
    });
    break;
  case 'production':
    // most of the prod specific config is provided directly by webpack as we supplied the -p flag
    // but we want to only use MiniCssExtractPlugin for prod, not dev
    config = merge(common, {
      devtool: 'source-map',
    });
    break;
  default:
    config = common;
}

module.exports = config;

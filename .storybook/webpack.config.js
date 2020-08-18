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
  plugins: [...config.plugins, ...custom.plugins],
  resolve: {
    ...config.resolve,
    ...custom.resolve,
  },
});

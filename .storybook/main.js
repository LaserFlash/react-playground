module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => config,
};

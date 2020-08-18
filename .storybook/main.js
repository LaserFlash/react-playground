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
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => config,
};

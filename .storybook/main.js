module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
  ],
  webpackFinal: async (config) => config
};

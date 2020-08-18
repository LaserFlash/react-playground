import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};

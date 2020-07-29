import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import './storybook.scss';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

addDecorator(withA11y);

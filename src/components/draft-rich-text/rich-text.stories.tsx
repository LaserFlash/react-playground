import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import exampleContent from 'mock-data/rich-text/rich-text';
import RichTextEditor from './rich-text';

export default { title: 'RichTextEditor/Draft', component: RichTextEditor };

export const basicEditor = () => <RichTextEditor onContentUpdate={action('Content Update')} />;
export const withPlacholderText = () => (
  <RichTextEditor
    placeholderText={text('placeholder', 'Any placeholder text can go here ...')}
    onContentUpdate={action('Content Update')}
  />
);
export const withInitialContent = () => (
  <RichTextEditor initialRaw={exampleContent} onContentUpdate={action('Content Update')} />
);
export const withStringInitialContent = () => (
  <RichTextEditor initialRaw="a basic string starter" onContentUpdate={action('Content Update')} />
);
export const isReadOnlyEditor = () => <RichTextEditor initialRaw={exampleContent} isReadOnly />;

import React from 'react';
import { Story } from '@storybook/react';
import exampleContent from 'mock-data/rich-text/rich-text';
import RichTextEditor from './rich-text';

export default {
  title: 'RichTextEditor/Draft',
  component: RichTextEditor,
  argTypes: {
    placeholderText: { control: 'text' },
    isReadOnly: { control: 'boolean' },
    onContentUpdate: { action: 'Content Update' },
  },
  args: { placeholderText: 'Type Here...', isReadOnly: false },
};

export const basicEditor: Story = (args) => <RichTextEditor {...args} />;
export const withInitialContent: Story = (args) => (
  <RichTextEditor initialRaw={exampleContent} {...args} />
);
export const withStringInitialContent: Story = (args) => (
  <RichTextEditor initialRaw="a basic string starter" {...args} />
);

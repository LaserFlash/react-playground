import React from 'react';
import { Story } from '@storybook/react';
import { detailedCards } from 'mock-data/cards/detailed-cards';
import CoverImage from './cover-image';

export default {
  title: 'Image/Cover Image',
  component: CoverImage,
};

const { image } = detailedCards[0];

export const withNoSizeRestriction: Story = () => <CoverImage image={image} />;
const SizeRestriction: Story<{ height: number; width: number }> = ({ height, width }) => (
  <div style={{ height: `${height}px`, width: `${width}px` }}>
    <CoverImage image={image} />
  </div>
);

export const withSizeRestriction = SizeRestriction.bind({});
withSizeRestriction.args = {
  width: 800,
  height: 800,
};

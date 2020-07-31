import React from 'react';
import { text } from '@storybook/addon-knobs';
import { detailedCards } from 'mock-data/cards/detailed-cards';
import CoverImage from './cover-image';

export default {
  title: 'Cover Image',
  component: CoverImage,
};

const { image } = detailedCards[0];

export const withNoSizeRestriction = () => <CoverImage image={image} />;
export const withSizeRestriction = () => (
  <div style={{ height: text('height', '400px'), width: text('width', '200px') }}>
    <CoverImage image={image} />
  </div>
);

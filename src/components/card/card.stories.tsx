import React from 'react';
import { Story } from '@storybook/react';
import { detailedCards } from 'mock-data/cards/detailed-cards';
import Card from './card';
import CardHeader from './card-header/card-header';
import CardContent from './card-content/card-content';
import CardMedia from './card-media/card-media';

export default {
  title: 'Cards/Custom Card',
  component: Card,
  args: {
    width: 400,
  },
};

const card = detailedCards[0];
type Args = { width: number };
export const withImageFirst: Story<Args> = ({ width }) => (
  <Card style={{ width: `${width}px` }}>
    <CardMedia image={card.image} />
    <CardHeader
      avatar={card.header.avatar}
      title={card.header.heading}
      subHeading={card.header.subHeading}
    />
    <CardContent>{card.content}</CardContent>
  </Card>
);

export const withImageMiddle: Story<Args> = ({ width }) => (
  <Card style={{ width: `${width}px` }}>
    <CardHeader
      avatar={card.header.avatar}
      title={card.header.heading}
      subHeading={card.header.subHeading}
    />
    <CardMedia image={card.image} />
    <CardContent>{card.content}</CardContent>
  </Card>
);

export const withImageLast: Story<Args> = ({ width }) => (
  <Card style={{ width: `${width}px` }}>
    <CardHeader
      avatar={card.header.avatar}
      title={card.header.heading}
      subHeading={card.header.subHeading}
    />
    <CardContent>{card.content}</CardContent>
    <CardMedia image={card.image} />
  </Card>
);

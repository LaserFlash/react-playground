import React from 'react';
import { text } from '@storybook/addon-knobs';
import { detailedCards } from 'mock-data/cards/detailed-cards';
import Card from './card';
import CardHeader from './card-header/card-header';
import CardContent from './card-content/card-content';
import CardMedia from './card-media/card-media';

export default {
  title: 'Cards/Custom Card',
  component: Card,
};

const card = detailedCards[0];

export const withImageFirst = () => (
  <Card style={{ width: text('card width', '400px') }}>
    <CardMedia image={card.image} />
    <CardHeader
      avatar={card.header.avatar}
      title={card.header.heading}
      subHeading={card.header.subHeading}
    />
    <CardContent>{card.content}</CardContent>
  </Card>
);

export const withImageMiddle = () => (
  <Card style={{ width: text('card width', '400px') }}>
    <CardHeader
      avatar={card.header.avatar}
      title={card.header.heading}
      subHeading={card.header.subHeading}
    />
    <CardMedia image={card.image} />
    <CardContent>{card.content}</CardContent>
  </Card>
);

export const withImageLast = () => (
  <Card style={{ width: text('card width', '400px') }}>
    <CardHeader
      avatar={card.header.avatar}
      title={card.header.heading}
      subHeading={card.header.subHeading}
    />
    <CardContent>{card.content}</CardContent>
    <CardMedia image={card.image} />
  </Card>
);

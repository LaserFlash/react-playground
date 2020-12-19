import React from 'react';
import { Story } from '@storybook/react';
import { detailedCards } from 'mock-data/cards/detailed-cards';
import Card from 'react-bootstrap/Card';

export default {
  title: 'Cards/Bootstrap Card',
  component: Card,
  args: {
    width: 400,
  },
};

const card = detailedCards[0];
type Args = { width: number };
export const withImageFirst: Story<Args> = ({ width }) => (
  <Card style={{ width: `${width}px` }}>
    <Card.Img variant="top" src={card.image.imageUrl} alt={card.image.altText} />
    <Card.Header style={{ display: 'flex', flexDirection: 'column' }}>
      <Card.Title>{card.header.heading}</Card.Title>
      <Card.Subtitle>{card.header.subHeading}</Card.Subtitle>
    </Card.Header>
    <Card.Body>{card.content}</Card.Body>
  </Card>
);

export const withImageMiddle: Story<Args> = ({ width }) => (
  <Card style={{ width: `${width}px` }}>
    <Card.Header style={{ display: 'flex', flexDirection: 'column' }}>
      <Card.Title>{card.header.heading}</Card.Title>
      <Card.Subtitle>{card.header.subHeading}</Card.Subtitle>
    </Card.Header>
    <Card.Img src={card.image.imageUrl} alt={card.image.altText} />
    <Card.Body>{card.content}</Card.Body>
  </Card>
);

export const withImageLast: Story<Args> = ({ width }) => (
  <Card style={{ width: `${width}px` }}>
    <Card.Header style={{ display: 'flex', flexDirection: 'column' }}>
      <Card.Title>{card.header.heading}</Card.Title>
      <Card.Subtitle>{card.header.subHeading}</Card.Subtitle>
    </Card.Header>
    <Card.Body>{card.content}</Card.Body>
    <Card.Img variant="bottom" src={card.image.imageUrl} alt={card.image.altText} />
  </Card>
);

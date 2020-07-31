import React from 'react';
import { text } from '@storybook/addon-knobs';
import { detailedCards } from 'mock-data/cards/detailed-cards';
import Card from 'react-bootstrap/Card';

export default {
  title: 'Cards/Bootstrap Card',
};

const card = detailedCards[0];

export const withImageFirst = () => (
  <Card style={{ width: text('card width', '400px') }}>
    <Card.Img variant="top" src={card.image.imageUrl} alt={card.image.altText} />
    <Card.Header style={{ display: 'flex', flexDirection: 'column' }}>
      <Card.Title>{card.header.heading}</Card.Title>
      <Card.Subtitle>{card.header.subHeading}</Card.Subtitle>
    </Card.Header>
    <Card.Body>{card.content}</Card.Body>
  </Card>
);

export const withImageMiddle = () => (
  <Card style={{ width: text('card width', '400px') }}>
    <Card.Header style={{ display: 'flex', flexDirection: 'column' }}>
      <Card.Title>{card.header.heading}</Card.Title>
      <Card.Subtitle>{card.header.subHeading}</Card.Subtitle>
    </Card.Header>
    <Card.Img src={card.image.imageUrl} alt={card.image.altText} />
    <Card.Body>{card.content}</Card.Body>
  </Card>
);

export const withImageLast = () => (
  <Card style={{ width: text('card width', '400px') }}>
    <Card.Header style={{ display: 'flex', flexDirection: 'column' }}>
      <Card.Title>{card.header.heading}</Card.Title>
      <Card.Subtitle>{card.header.subHeading}</Card.Subtitle>
    </Card.Header>
    <Card.Body>{card.content}</Card.Body>
    <Card.Img variant="bottom" src={card.image.imageUrl} alt={card.image.altText} />
  </Card>
);

import React from 'react';
import { Story } from '@storybook/react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { detailedCards } from 'mock-data/cards/detailed-cards';
import CoverImage from 'components/cover-image/cover-image';

export default {
  title: 'Cards/Material UI Card',
  args: {
    width: 400,
  },
};

type Args = { width: number };
const card = detailedCards[0];

export const withImageFirst: Story<Args> = ({ width }) => (
  <Card style={{ width: `${width}px` }}>
    <CardMedia component="img" image={card.image.imageUrl} title={card.image.altText} />
    <CardHeader
      avatar={<Avatar src={card.header.avatar.imageUrl} alt={card.header.avatar.altText} />}
      title={card.header.heading}
      subheader={card.header.subHeading}
    />
    <CardContent>{card.content}</CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
);

export const withImageMiddle: Story<Args> = ({ width }) => (
  <Card style={{ width: `${width}px` }}>
    <CardHeader
      avatar={<Avatar src={card.header.avatar.imageUrl} alt={card.header.avatar.altText} />}
      title={card.header.heading}
      subheader={card.header.subHeading}
    />
    <CardMedia component="img" image={card.image.imageUrl} title={card.image.altText} />
    <CardContent>{card.content}</CardContent>
  </Card>
);

export const withImageLast: Story<Args> = ({ width }) => (
  <Card style={{ width: `${width}px` }}>
    <CardHeader
      avatar={<Avatar src={card.header.avatar.imageUrl} alt={card.header.avatar.altText} />}
      title={card.header.heading}
      subheader={card.header.subHeading}
    />
    <CardContent>{card.content}</CardContent>
    <CardMedia component="img" image={card.image.imageUrl} title={card.image.altText} />
  </Card>
);

export const withRestrictedImage: Story<Args> = ({ width }) => (
  <Card style={{ width: `${width}px` }}>
    <CardHeader
      avatar={<Avatar src={card.header.avatar.imageUrl} alt={card.header.avatar.altText} />}
      title={card.header.heading}
      subheader={card.header.subHeading}
    />
    <CardContent>{card.content}</CardContent>
    <CardMedia style={{ height: 100 }}>
      <CoverImage image={card.image} />
    </CardMedia>
  </Card>
);

export const withRowLayout: Story<Args> = ({ width }) => (
  <Card
    style={{
      display: 'flex',
      flexDirection: 'row',
      width: `${width}px`,
    }}
  >
    <div>
      <CardHeader
        avatar={<Avatar src={card.header.avatar.imageUrl} alt={card.header.avatar.altText} />}
        title={card.header.heading}
        subheader={card.header.subHeading}
      />
      <CardContent>{card.content}</CardContent>
    </div>
    <CardMedia style={{ maxWidth: '30%', marginLeft: 'auto' }}>
      <CoverImage image={card.image} />
    </CardMedia>
  </Card>
);

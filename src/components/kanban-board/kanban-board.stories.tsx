import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { basicCards } from 'mock-data/cards/basic-card';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardMedia,
  Collapse,
  CardActions,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CoverImage from 'components/cover-image/cover-image';
import { detailedCards } from 'mock-data/cards/detailed-cards';
import { IImage } from 'types/common';
import KanbanBoard from './kanban-board';

const columns = [
  { id: '1', title: 'Backlog' },
  { id: '2', title: 'Acknowledged' },
  { id: '3', title: 'In Progress' },
  { id: '4', title: 'Fixed' },
];

export default { title: 'KanbanBoard', component: KanbanBoard };

export const withCards: Story = () => (
  <KanbanBoard columns={columns} cards={basicCards} cardColumnIdKey="columnId" />
);
export const withoutCards: Story = () => (
  <KanbanBoard columns={columns} cards={[]} cardColumnIdKey="columnId" />
);
export const withCustomColumnHeader: Story = () => (
  <KanbanBoard
    columns={columns}
    cards={basicCards}
    cardColumnIdKey="columnId"
    columnHeaderRenderer={(col) => (
      <div style={{ color: 'blue' }}>
        <h1>{col.title}</h1>
      </div>
    )}
  />
);

export const withBasicCustomCards: Story = () => (
  <KanbanBoard<{
    id: string;
    columnId: string;
    title: string;
    description: string;
  }>
    columns={columns}
    cards={basicCards}
    cardColumnIdKey="columnId"
    cardRenderer={(card) => (
      <div
        style={{
          borderRadius: 8,
          borderColor: 'blue',
          borderStyle: 'solid',
          width: '400px',
          marginBottom: 6,
          padding: 8,
        }}
      >
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </div>
    )}
  />
);

export const withAdvancedCustomCards: Story = () => (
  <KanbanBoard<{
    id: string;
    stage: string;
    header: { avatar: IImage; heading: string; subHeading: string };
    image: IImage;
    content: string;
  }>
    columns={columns}
    cards={detailedCards}
    cardColumnIdKey="stage"
    cardRenderer={(card) => {
      const [expanded, setExpanded] = useState(false);
      return (
        <Card style={{ width: 300 }}>
          <CardHeader
            avatar={<Avatar src={card.header.avatar.imageUrl} alt={card.header.avatar.altText} />}
            title={card.header.heading}
            subheader={card.header.subHeading}
          />
          <CardContent>{card.content}</CardContent>
          <CardActions style={{ alignItems: 'end', flexDirection: 'column' }}>
            <IconButton
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon style={{ transform: `rotate(${expanded ? '180deg' : '0deg'})` }} />
            </IconButton>
          </CardActions>
          <Collapse in={expanded}>
            <CardMedia>
              <CoverImage image={card.image} />
            </CardMedia>
          </Collapse>
        </Card>
      );
    }}
  />
);

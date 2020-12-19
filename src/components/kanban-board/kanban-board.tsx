import React, { ReactElement, useState } from 'react';
import Board, { moveCard } from '@lourenci/react-kanban';
import { DefaultColumn, DefaultCard, BaseCard, BaseColumn } from './kanban-board.d';
import './kanban-board.scss';

interface Props<Card, Column> {
  board: { columns: Column[] };
  cardRenderer?(card: Card): React.ReactChild;
  columnHeaderRenderer?(col: Column): React.ReactChild;
}

export const KanbanBoard = <
  Card extends BaseCard = DefaultCard,
  Column extends BaseColumn = DefaultColumn
>(
  props: Props<Card, Column>
): ReactElement => {
  const [controlledBoard, setBoard] = useState(props.board);
  function handleCardMove(_card: Card, source: any, destination: any) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <Board onCardDragEnd={handleCardMove} disableColumnDrag {...props}>
      {controlledBoard}
    </Board>
  );
};

interface BuilderProps<Card, Column, K> {
  columns: Column[];
  cards: Card[];
  cardColumnIdKey: K;
  cardRenderer?(card: Card): React.ReactChild;
  columnHeaderRenderer?(col: Column): React.ReactChild;
}

export const KanbanBoardBuilder = <
  Card extends BaseCard = DefaultCard,
  Column extends BaseColumn = DefaultColumn
>(
  props: BuilderProps<Card, Column, keyof Card>
): ReactElement => {
  // build up board from columns and cards
  const board = {
    columns: props.columns.map((col) => ({
      ...col,
      cards: props.cards.filter(
        (card: Card) => (card[props.cardColumnIdKey] as unknown) === col.id
      ),
    })),
  };

  return (
    <KanbanBoard
      board={board}
      cardRenderer={props.cardRenderer}
      columnHeaderRenderer={props.columnHeaderRenderer}
    />
  );
};

export default KanbanBoardBuilder;

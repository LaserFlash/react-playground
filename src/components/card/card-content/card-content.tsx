import React from 'react';
import classnames from 'classnames';
import './card-content.scss';

export interface Props {
  className?: string;
}

export const CardContent: React.FC<Props> = (props) => (
  <div className={classnames('custom-card-content', props.className)}>{props.children}</div>
);

export default CardContent;

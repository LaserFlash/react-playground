import React from 'react';
import classnames from 'classnames';
import CSS from 'csstype';
import './card.scss';

interface Props {
  style?: CSS.Properties;
  className?: string;
}

export const Card: React.FC<Props> = (props) => (
  <div className={classnames('custom-card', props.className)} style={props.style}>
    {props.children}
  </div>
);

export default Card;

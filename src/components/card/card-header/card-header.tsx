import React from 'react';
import classnames from 'classnames';
import { IImage } from 'types/common';
import './card-header.scss';

export interface Props {
  avatar?: IImage;
  title?: string;
  subHeading?: string;
  className?: string;
}

export const CardHeader: React.FC<Props> = (props) => (
  <div className={classnames('custom-card-header', props.className)}>
    {!!props.avatar && (
      <img className="avatar block" src={props.avatar.imageUrl} alt={props.avatar.altText} />
    )}
    <div className="heading block">
      {!!props.title && <h3>{props.title}</h3>}
      {!!props.subHeading && <h4>{props.subHeading}</h4>}
    </div>
  </div>
);

export default CardHeader;

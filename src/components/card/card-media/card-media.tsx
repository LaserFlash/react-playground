import React from 'react';
import classnames from 'classnames';
import { IImage } from 'types/common';
import './card-media.scss';

export interface Props {
  image: IImage;
  className?: string;
}

export const CardMedia: React.FC<Props> = (props) => (
  <div className={classnames('custom-card-media', props.className)}>
    {!!props.image && (
      <div className="card-image-holder">
        <img className="card-image-bg" src={props.image.imageUrl} alt="" />
        <img className="card-image" src={props.image.imageUrl} alt={props.image.altText} />
      </div>
    )}
  </div>
);

export default CardMedia;

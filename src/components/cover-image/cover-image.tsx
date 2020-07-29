import React from 'react';
import classnames from 'classnames';
import { IImage } from 'types/common';
import './cover-image.scss';

export interface Props {
  image: IImage;
  className?: string;
}

/**
 * An Image wrapper that reuses the image and blurs it
 * This avoids having empty space when image dimension do not match parent
 *
 * Set a maxWidth or maxHeight on container to see the effect
 * @type {[type]}
 */
export const CoverImage: React.FC<Props> = (props) => (
  <div className={classnames('image-holder', props.className)}>
    <img className="image-bg" src={props.image.imageUrl} alt="" />
    <img className="image" src={props.image.imageUrl} alt={props.image.altText} />
  </div>
);

export default CoverImage;

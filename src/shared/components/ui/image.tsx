import { FC } from 'react';
import clsx from 'clsx';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Image: FC<ImageProps> = props => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ height: props.height ?? 'auto', width: props.width ?? 'auto' }}
      className={clsx('object-cover', props.className)}
    />
  );
};

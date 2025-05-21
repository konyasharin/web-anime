import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = props => {
  return (
    <div
      className={clsx(
        'max-w-[1140px] mt-0 mb-0 mr-auto ml-auto',
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

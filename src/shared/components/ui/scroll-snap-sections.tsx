import { FC, ReactNode } from 'react';

interface ScrollSnapSections {
  children?: ReactNode;
  axis?: 'x' | 'y';
}

export const ScrollSnapSections: FC<ScrollSnapSections> = props => {
  return (
    <div
      className={'h-screen [&::-webkit-scrollbar]:hidden'}
      style={{
        scrollSnapType: `${props.axis ?? 'y'} mandatory`,
        overflowY: props.axis === 'y' ? 'scroll' : 'auto',
        overflowX: props.axis === 'x' ? 'scroll' : 'auto',
      }}
    >
      {props.children}
    </div>
  );
};

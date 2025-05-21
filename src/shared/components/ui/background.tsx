import { FC } from 'react';

export const Background: FC = () => {
  return (
    <div
      className={
        'bg-(--black-light-900) min-h-screen w-screen fixed top-0 left-0 z-[-1000]'
      }
    />
  );
};

import { FC } from 'react';
import clsx from 'clsx';

interface LogoProps {
  size?: 'sm' | 'md';
  className?: string;
}

export const Logo: FC<LogoProps> = ({ size = 'md', ...props }) => {
  const getLogoText = () => {
    if (size === 'sm') return 'WA';
    return 'Web-Anime';
  };

  return (
    <div
      className={clsx(
        'text-xl text-black p-4 rounded-md bg-white relative',
        props.className,
      )}
    >
      {getLogoText()}
    </div>
  );
};

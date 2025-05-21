import { FC } from 'react';
import { ScrollSnapSections } from '@shared';

export const MainPage: FC = () => {
  return (
    <div>
      <ScrollSnapSections>
        <div className={'h-screen'} style={{ scrollSnapAlign: 'start' }}>
          1
        </div>
        <div className={'h-screen'} style={{ scrollSnapAlign: 'start' }}>
          2
        </div>
      </ScrollSnapSections>
    </div>
  );
};

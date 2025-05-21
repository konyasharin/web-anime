import { FC } from 'react';
import { Router } from '@app/routes';
import { Background } from '@shared';
import { Header } from '@widgets';

const App: FC = () => {
  return (
    <div className={'text-white'}>
      <Background />
      <Header />
      <Router />
    </div>
  );
};

export default App;

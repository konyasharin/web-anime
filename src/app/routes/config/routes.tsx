import { MainPage } from '@pages';

import { Route } from '../model';

import { paths } from './paths.ts';

export const routes: Route[] = [
  {
    path: paths.main,
    page: <MainPage />,
  },
];

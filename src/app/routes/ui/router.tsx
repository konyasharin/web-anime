import { FC } from 'react';
import { Route as RouteComponent, Routes } from 'react-router-dom';

import { routes as defaultRoutes } from '../config';
import { Route } from '../model';

interface RouterProps {
  routes?: Route[];
}

export const Router: FC<RouterProps> = ({ routes = defaultRoutes }) => {
  return (
    <Routes>
      {routes.map(route => (
        <RouteComponent
          path={route.path}
          element={route.page}
          key={route.path}
        />
      ))}
    </Routes>
  );
};

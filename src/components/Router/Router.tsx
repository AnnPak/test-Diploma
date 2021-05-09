import React, { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { ProjectsPage } from 'components/pages/ProjectsPage';
import { CalendarPage } from 'components/pages/CalendarPage';
import { ProfilePage } from 'components/pages/ProfilePage';
import { Route } from './Route';

/** Добавить новый layout рег/авто */

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* exact - строгое сравнение */}
        <Route path={['/', '/projects']} exact routeComponent={ProjectsPage} />
        <Route path="/profile" routeComponent={ProfilePage} />
        <Route path="/calendar" routeComponent={CalendarPage} />
      </Switch>
    </BrowserRouter>
  );
};

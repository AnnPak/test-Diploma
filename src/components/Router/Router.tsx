import React, { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { NonAuthLayout } from 'components/common/Layout/NonAuthLayout';
import { ProjectsPage } from 'components/pages/ProjectsPage';
import { CalendarPage } from 'components/pages/CalendarPage';
import { ProfilePage } from 'components/pages/ProfilePage';
import { SignInPage } from 'components/pages/SignInPage';
import { SignUpPage } from 'components/pages/SignUpPage';
import { Route } from './Route';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* exact - строгое сравнение */}
        <Route path={['/', '/projects']} exact routeComponent={ProjectsPage} />
        <Route path="/profile" routeComponent={ProfilePage} />
        <Route path="/calendar" routeComponent={CalendarPage} />
        <Route path="/signIn" routeComponent={SignInPage} layout={NonAuthLayout} />
        <Route path="/signUp" routeComponent={SignUpPage} layout={NonAuthLayout} />
      </Switch>
    </BrowserRouter>
  );
};

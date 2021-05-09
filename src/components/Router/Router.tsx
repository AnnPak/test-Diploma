import React, { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Layout } from 'components/common/Layout/Layout';
import { AuthLayout } from 'components/common/Layout/AuthLayout';
import { ProjectsPage } from 'components/pages/ProjectsPage';
import { CalendarPage } from 'components/pages/CalendarPage';
import { ProfilePage } from 'components/pages/ProfilePage';
import { AutorizationPage } from 'components/pages/AutorizationPage';
import { RegistrationPage } from 'components/pages/RegistrationPage';
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
      <AuthLayout>
        <Switch>
          <Route path="/auth" routeComponent={AutorizationPage} />
          <Route path="/reg" routeComponent={RegistrationPage} />
        </Switch>
      </AuthLayout>
    </BrowserRouter>
  );
};

import React, { FC } from 'react';
import { Route as RouteDom, RouteProps } from 'react-router-dom';

import { Layout as LayoutCompoent } from 'components/common/Layout/Layout';
import { AuthLayout } from 'components/common/Layout/AuthLayout';

interface RouteInterface extends RouteProps {
  layout?: React.ElementType<any>;
  routeComponent: React.ElementType<any>;
}

export const Route: FC<RouteInterface> = ({
  layout: Layout = LayoutCompoent,
  routeComponent: Component,
  children,
  ...rest
}) => (
  <RouteDom {...rest}>
    <Layout>
      <Component />
    </Layout>
    <AuthLayout>
      <Component />
    </AuthLayout>
  </RouteDom>
);

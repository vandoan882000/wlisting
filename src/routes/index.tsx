// import { AboutPage } from 'containers/AboutPage';
import { HomePage } from 'containers/HomePage/HomePage';
import { HomePage2 } from 'containers/HomePage2/HomePage2';
import { ListingDetailPage } from 'containers/ListingDetailPage/ListingDetailPage';
import { NotFoundPage } from 'containers/NotFoundPage/NotFoundPage';
// import { NotFoundPage } from 'containers/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GuardedRoute from './GuardedRoute';
import { Page, Role } from './types';

const adminRoles: Role[] = ['admin'];

export const pages: Page[] = [
  { path: '/', component: HomePage, roles: adminRoles },
  {
    path: '/home2',
    component: HomePage2,
    roles: adminRoles,
  },
  {
    path: '/listing',
    component: ListingDetailPage,
    roles: adminRoles,
  },
];

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact={true} path="/">
          <Redirect from="/" to="/" exact></Redirect>
        </Route> */}
        {pages.map(({ component: Component, path, roles }) => {
          return (
            <GuardedRoute roles={roles} key={path} path={path} exact>
              <Component />
            </GuardedRoute>
          );
        })}
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

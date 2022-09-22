// import { AboutPage } from 'containers/AboutPage';
import { AddListingDonePage } from 'containers/AddListingDonePage/AddListingDonePage';
import { AddListingPage } from 'containers/AddListingPage/AddListingPage';
import { HomePage } from 'containers/HomePage/HomePage';
import { HomePage2 } from 'containers/HomePage2/HomePage2';
import { ListingDetailPage } from 'containers/ListingDetailPage/ListingDetailPage';
import { NotFoundPage } from 'containers/NotFoundPage/NotFoundPage';
import { Pricing } from 'containers/Pricing/Pricing';
import { ReviewPage } from 'containers/ReviewPage/ReviewPage';
import { SearchPage } from 'containers/SearchPage/SearchPage';
import { Step } from 'containers/Step/Step';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page, Role } from 'types/Page';

import GuardedRoute from './GuardedRoute';

const adminRoles: Role[] = ['admin'];

export const pages: Page[] = [
  { path: '/', component: HomePage, roles: adminRoles },
  {
    path: '/home2',
    component: HomePage2,
    roles: adminRoles,
  },
  {
    path: '/listing/:id',
    component: ListingDetailPage,
    roles: adminRoles,
  },
  {
    path: '/review',
    component: ReviewPage,
    roles: adminRoles,
  },
  {
    path: '/add',
    component: AddListingPage,
    roles: adminRoles,
  },
  {
    path: '/search/category=:category&location=:location',
    component: SearchPage,
    roles: adminRoles,
  },
  {
    path: '/pricing',
    component: Pricing,
    roles: adminRoles,
  },
  {
    path: '/step',
    component: Step,
    roles: adminRoles,
  },
  {
    path: '/adddone',
    component: AddListingDonePage,
    roles: adminRoles,
  },
  {
    path: '/*',
    component: NotFoundPage,
    roles: adminRoles,
  },
];

export const ListingRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map(({ component: Component, path, roles }) => {
          return (
            <Route
              key={path as string}
              path={path as string}
              element={
                <GuardedRoute roles={roles}>
                  <Component />
                </GuardedRoute>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

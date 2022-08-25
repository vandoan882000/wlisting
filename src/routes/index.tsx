// import { AboutPage } from 'containers/AboutPage';
import { AddListingPage } from 'containers/AddListingPage/AddListingPage';
import { HomePage } from 'containers/HomePage/HomePage';
import { HomePage2 } from 'containers/HomePage2/HomePage2';
import { ListingDetailPage } from 'containers/ListingDetailPage/ListingDetailPage';
import { NotFoundPage } from 'containers/NotFoundPage/NotFoundPage';
import { ReviewPage } from 'containers/ReviewPage/ReviewPage';
import { SearchPage } from 'containers/SearchPage/SearchPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Page, Role } from './types';

const adminRoles: Role[] = ['admin'];

export const pages: Page[] = [
  { path: '/', component: HomePage, roles: adminRoles },
  {
    path: 'home2',
    component: HomePage2,
    roles: adminRoles,
  },
  {
    path: 'listing',
    component: ListingDetailPage,
    roles: adminRoles,
  },
];

export const ListingRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* {pages.map(({ component: Component, path, roles }) => {
          return <GuardedRoute roles={roles} key={path} path={path} element={<Component />} />;
        })} */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home2" element={<HomePage2 />} />
        <Route path="/listing/:id" element={<ListingDetailPage />} />
        <Route path="/add" element={<AddListingPage />} />
        <Route path="/search/:key" element={<SearchPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

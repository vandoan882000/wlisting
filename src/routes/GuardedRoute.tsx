import { FC, useEffect } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';

import { Role } from './types';

export interface GuardedRouteProps extends RouteProps {
  roles: Role[];
  title?: string;
}
// Lấy từ redux
const dataFake = {
  data: {
    id: 1,
    role: 'admin',
  },
  status: 'sucess',
};

const GuardedRoute: FC<GuardedRouteProps> = ({ roles, ...rest }) => {
  const { status, data } = dataFake;
  const history = useHistory();

  useEffect(() => {
    if (status === 'idle' || status === 'failure') {
      history.push('/login');
    }
    if (!roles.includes(data.role as Role)) {
      history.push('/role-redirect');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return <Route {...rest} />;
};

export default GuardedRoute;

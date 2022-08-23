import { FC, useEffect } from 'react';
import { Route, RouteProps, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'idle' || status === 'failure') {
      navigate('/login');
    }
    if (!roles.includes(data.role as Role)) {
      navigate('/role-redirect');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  console.log(roles, rest);
  return <Route {...rest} />;
};

export default GuardedRoute;

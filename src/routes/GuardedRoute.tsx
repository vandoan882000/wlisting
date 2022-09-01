import { FC, useEffect } from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';
import { Role } from 'types/Page';

export interface GuardedRouteProps extends RouteProps {
  roles: Role[];
}
const dataFake = {
  data: {
    id: 1,
    role: 'admin',
  },
  status: 'sucess',
};

const GuardedRoute: FC<GuardedRouteProps> = ({ children, roles }) => {
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

  return <>{children}</>;
};

export default GuardedRoute;

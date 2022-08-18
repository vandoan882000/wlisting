import { FC, ReactNode } from 'react';

import { Role } from './types';

export interface GuardedComponentProps {
  /** Children sẽ hiển thị nếu auth role nằm trong mảng prop role hoặc prop condition true */
  children?: ReactNode;
  /** Nếu điều kiện hiển thị children sai thì sẽ hiển thị default */
  Default?: ReactNode;
  /** Để kiểm tra xem auth role có nằm trong roles này không */
  roles?: Role[];
  /** Để kiểm tra xem auth id có bằng userId này không */
  userId?: number;
  /** Điều kiện thứ 3 đi kèm thêm bổ sung cho roles để hiển thị children */
  condition?: boolean;
}
// Lấy từ redux
const dataFake = {
  data: {
    id: 1,
    role: 'admin',
  },
};

const GuardedComponent: FC<GuardedComponentProps> = ({ condition = true, roles = [], userId, children, Default = null }) => {
  const { data } = dataFake;
  if (roles.includes(data.role as Role) && (userId !== undefined && data.role !== 'admin' ? userId === data.id : true) && condition) {
    return <>{children}</>;
  }
  return <>{Default}</>;
};

export default GuardedComponent;

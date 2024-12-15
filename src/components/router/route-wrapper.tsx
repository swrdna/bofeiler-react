import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/providers/auth.provider';

const RouteWrapper = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default RouteWrapper;

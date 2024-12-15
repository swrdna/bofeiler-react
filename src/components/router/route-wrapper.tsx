import { Navigate } from 'react-router-dom';

import { useAuth } from '@/providers/auth.provider';
import Layout from '../layout/layout';

const RouteWrapper = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Layout />;
};

export default RouteWrapper;

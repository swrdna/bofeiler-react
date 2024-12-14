import { Navigate } from 'react-router-dom';

import Layout from '@/components/layout/layout';
import { useAuth } from '@/providers/auth.provider';

const RouteWrapper = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Layout />;
};

export default RouteWrapper;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Routes from '@/components/router/routes';
import AuthProvider from '@/providers/auth.provider';

import '@/main.css';

const queryClient = new QueryClient();

const Main = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default Main;

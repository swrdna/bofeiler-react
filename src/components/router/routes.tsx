import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorBoundary, PageWrapper, RouteWrapper } from '@/components/router';
import { DashboardPage, LoginPage } from '@/pages';
import { useAuth } from '@/providers/auth.provider';

const Routes = () => {
  const { user } = useAuth();

  const authenticatedRoutes = [
    {
      element: <RouteWrapper />,
      errorElement: <ErrorBoundary isPageNotFound />,
      children: [
        {
          path: '/',
          element: (
            <PageWrapper>
              <DashboardPage />
            </PageWrapper>
          ),
        },
      ],
    },
  ];

  const publicRoutes = [
    {
      path: '/login',
      element: (
        <PageWrapper>
          <LoginPage />
        </PageWrapper>
      ),
    },
  ];

  const router = createBrowserRouter([
    ...(!user ? publicRoutes : []),
    ...authenticatedRoutes,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;

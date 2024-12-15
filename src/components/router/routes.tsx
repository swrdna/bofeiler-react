import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorBoundary, PageWrapper, RouteWrapper } from '@/components/router';
import { DashboardPage, LoginPage } from '@/pages';
import { useAuth } from '@/providers/auth.provider';

const Routes = () => {
  const { user } = useAuth();

  const authenticatedPath = [
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

  const unauthenticatedPath = [
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
    ...(!user ? unauthenticatedPath : []),
    ...authenticatedPath,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;

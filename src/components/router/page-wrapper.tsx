import { ReactNode, Suspense } from 'react';

import { ErrorBoundary } from '@/components/router';

const PageWrapper = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary>
    <Suspense fallback="Loading...">{children}</Suspense>
  </ErrorBoundary>
);

export default PageWrapper;

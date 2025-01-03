import { Outlet } from 'react-router-dom';

import AppSidebar from './app-sidebar';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

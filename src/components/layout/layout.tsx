import { Outlet } from 'react-router-dom';

import { AppSidebar } from '@/components/layout';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="px-5 py-4">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;

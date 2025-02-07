import { Link } from 'react-router-dom';

import { useAuth } from '@/providers/auth.provider';

const AppSidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="flex h-full w-1/5 flex-col justify-between bg-gray-200 p-4">
      <div className="flex flex-col gap-2">
        <Link to="/">Dashboard</Link>
        <Link to="/items">Items</Link>
      </div>
      <button type="button" className="inline-flex" onClick={logout}>
        Log out
      </button>
    </div>
  );
};

export default AppSidebar;

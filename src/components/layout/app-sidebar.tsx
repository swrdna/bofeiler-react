import { Link } from 'react-router-dom';

import { useAuth } from '@/providers/auth.provider';

const AppSidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="flex flex-col justify-between p-4 bg-base-200 h-full w-1/5">
      <ul className="menu bg-base-200 rounded-box w-56">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Parent</Link>
          <ul>
            <li>
              <Link to="/">Child 1</Link>
            </li>
            <li>
              <Link to="/">Child 2</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Report</Link>
        </li>
      </ul>

      <ul className="menu bg-base-200 rounded-box w-56">
        <li className="dropdown dropdown-right dropdown-end">
          <button type="button" tabIndex={0} className="w-full">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            Username
          </button>
          <ul className="dropdown-content bg-base-100 menu rounded-box z-[1] w-52 p-2 border border-base-200">
            <li>
              <div className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <input
                  type="checkbox"
                  value="light"
                  className="toggle theme-controller"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
              </div>
            </li>
            <div className="divider m-0" />
            <li>
              <Link to="/">Account</Link>
            </li>
            <li>
              <Link to="/">Settings</Link>
            </li>
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <div className="divider m-0" />
            <li>
              <button type="button" className="inline-flex" onClick={logout}>
                Log out
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AppSidebar;

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { AUTH_STORAGE_KEY } from '@/utils/constants';

export interface IUser {
  id: number;
  username: string;
  fullname: string;
  exp_token: number;
  access_token: string;
}

interface IUseAuth {
  user: IUser | null;
  setUser: (user: IUser) => void;
  logout: () => void;
}

const AuthContext = createContext({} as IUseAuth);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser_] = useState(
    JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)!),
  );

  const setUser = (newUser: IUser) => {
    setUser_(newUser);
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setUser_(null);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [user]);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      logout,
    }),
    [user],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): IUseAuth => {
  return useContext(AuthContext);
};

export default AuthProvider;

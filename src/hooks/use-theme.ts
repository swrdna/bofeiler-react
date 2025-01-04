import { useEffect, useState } from 'react';

type ITheme = 'light' | 'dark';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ITheme>('light');

  useEffect(() => {
    let scheme: ITheme;

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      scheme = 'dark';
    } else {
      scheme = 'light';
    }

    setCurrentTheme(scheme);
  }, []);

  const setTheme = (scheme: ITheme) => {
    const root = document.getElementById('root');
    root?.setAttribute('data-theme', scheme);
    setCurrentTheme(scheme);
  };

  const isDarkTheme = currentTheme === 'dark';

  return { currentTheme, isDarkTheme, setTheme };
};

import { useEffect, useState } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';

interface ThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProvider) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    const match = document.cookie.match(/theme=(light|dark)/);

    if (match) {
      setTheme(match[1] as Theme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

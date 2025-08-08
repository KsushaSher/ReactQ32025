import { useState } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';

interface ThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProvider) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

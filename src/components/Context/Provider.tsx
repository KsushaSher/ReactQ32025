import { useState } from 'react';
import { ThemeContext, type Theme } from './Context';

interface IThemeProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: IThemeProps) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

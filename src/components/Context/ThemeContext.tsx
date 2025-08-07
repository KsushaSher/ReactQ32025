import { createContext } from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

const DEFAULT_CONTEXT: ThemeContext = {
  theme: 'light',
  toggleTheme: () => {
    throw new Error('No context');
  },
};

export const ThemeContext = createContext<ThemeContext>(DEFAULT_CONTEXT);

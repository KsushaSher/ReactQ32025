import { useContext } from 'react';
import { ThemeContext } from './Context';

export const useThemeToggle = () => useContext(ThemeContext).toggleTheme;
export const useTheme = () => useContext(ThemeContext).theme;

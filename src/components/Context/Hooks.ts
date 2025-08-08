import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useThemeToggle = () => useContext(ThemeContext).toggleTheme;
export const useTheme = () => useContext(ThemeContext).theme;

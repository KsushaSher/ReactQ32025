import { useTheme, useThemeToggle } from '../Context/Hooks';
import s from './ThemeButton.module.scss';

const ThemeButton = () => {
  const theme = useTheme();
  const themeToggle = useThemeToggle();

  function handleOnClick() {
    themeToggle();
  }

  return (
    <button
      className={`${s['theme-button']} ${s[theme]}`}
      data-testid="theme-button"
      onClick={handleOnClick}
    ></button>
  );
};

export default ThemeButton;

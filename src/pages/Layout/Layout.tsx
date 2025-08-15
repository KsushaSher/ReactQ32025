import { NavigationLinks } from '../../components/NavigationLinks';
import { useTheme } from '../../components/Context/Hooks';
import ThemeButton from '../../components/ThemeButton';
import s from './Layout.module.scss';
import '../../styles/main.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <div className={`wrapper-app ${theme}`} data-testid="wrapper-app">
      <header className={s.header}>
        <div className={s.wrapper}>
          <nav className={s.wrapper}>
            <NavigationLinks />
          </nav>
          <ThemeButton />
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;

import Header from '../../components/Header';
import s from './MainPage.module.scss';
import '../../styles/main.scss';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className={`${'wrapper-app'} ${'light'}`}>
      <Header />
      <Outlet />
      <main className={s['main']}>{'MAIN'}</main>
    </div>
  );
};

export default MainPage;

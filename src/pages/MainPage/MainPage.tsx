import s from './MainPage.module.scss';
import '../../styles/main.scss';

const MainPage = () => {
  return (
    <div className="wrapper-app">
      <header>{'HEADER'}</header>
      <main className={s['main']}>{'MAIN'}</main>
    </div>
  );
};

export default MainPage;

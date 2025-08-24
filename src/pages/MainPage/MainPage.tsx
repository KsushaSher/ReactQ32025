import Header from '../../components/Header';
import s from './MainPage.module.scss';
import '../../styles/main.scss';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import {
  selectControlledData,
  selectUncontrolledData,
} from '../../store/selectors/forms.selectors';

const MainPage = () => {
  const uncontrolledItems = useAppSelector(selectUncontrolledData);

  console.log('MAIN uncontrolledItems---', uncontrolledItems);
  const controlledItems = useAppSelector(selectControlledData);

  return (
    <div className={`${'wrapper-app'} ${'light'}`}>
      <Header />
      <Outlet />
      <main className={s['main']}>
        <div className={s['uncontrolled-items']}>
          {uncontrolledItems?.map(({ image, ...item }, index) => (
            <div key={index}>
              {typeof image === 'string' && (
                <img
                  src={image}
                  alt={`image ${index}`}
                  style={{ width: '100%' }}
                />
              )}
              <div className={s.item}>
                {Object.entries(item).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong>
                    {` ${String(value)}`}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={s['controlled-items']}>
          {controlledItems?.map(({ image, ...item }, index) => (
            <div key={index}>
              {typeof image === 'string' && (
                <img
                  src={image}
                  alt={`image ${index}`}
                  style={{ width: '100%' }}
                />
              )}
              {Object.entries(item).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}:</strong> {String(value)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPage;

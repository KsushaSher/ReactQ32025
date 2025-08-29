import type { ResponseData } from '../../models';
import CountryCard from '../CountryCard';
import { useData } from '../DataContext/Hooks';
import s from './CountryList.module.scss';

const CountryList = () => {
  const data: ResponseData = useData();

  console.log('data------', data);

  return (
    <div className={s['card-list']}>
      {Object.values(data).map((item, id) => {
        return (
          <CountryCard
            countryName={Object.keys(data)[id]}
            countryData={item}
            key={id}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default CountryList;

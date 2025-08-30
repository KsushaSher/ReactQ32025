import type { ResponseData } from '../../models';
import { useAppSelector } from '../../store/hooks';
import { selectSearchQuery } from '../../store/selectors/ui.selectors';
import { getSortedCountries } from '../../utils';
import CountryCard from '../CountryCard';
import { useData } from '../DataContext/Hooks';
import s from './CountryList.module.scss';

const CountryList = () => {
  const data: ResponseData = useData();
  const search = useAppSelector(selectSearchQuery);
  const finalData = search ? getSortedCountries(data, search) : data;

  if (Object.entries(finalData).length === 0) {
    return <>such country not found</>;
  }

  console.log('data---', data);

  return (
    <div className={s['card-list']}>
      {Object.values(finalData).map((item, index) => (
        <CountryCard
          countryName={Object.keys(finalData)[index]}
          countryData={item}
          key={`${Object.keys(finalData)[index]}-card`}
          id={index}
        />
      ))}
    </div>
  );
};

export default CountryList;

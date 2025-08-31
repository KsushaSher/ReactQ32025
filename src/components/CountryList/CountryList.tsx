import type { ResponseData } from '../../models';
import { useAppSelector } from '../../store/hooks';
import {
  selectSearchQuery,
  selectSortOption,
} from '../../store/selectors/ui.selectors';
import { filterCountries, sortCountries } from '../../utils';
import CountryCard from '../CountryCard';
import { useData } from '../DataContext/Hooks';
import s from './CountryList.module.scss';

const CountryList = () => {
  const data: ResponseData = useData();
  const search = useAppSelector(selectSearchQuery);
  const sortType = useAppSelector(selectSortOption);
  const searchData = search ? filterCountries(data, search) : data;
  const finalData = sortCountries(data, sortType);

  if (Object.entries(searchData).length === 0) {
    return <>such country not found</>;
  }

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

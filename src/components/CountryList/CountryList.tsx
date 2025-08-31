import { useMemo } from 'react';
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

  const finalData = useMemo(() => {
    const searchData = search ? filterCountries(data, search) : data;

    return sortCountries(searchData, sortType);
  }, [data, search, sortType]);

  if (finalData.length === 0) {
    return <>such country not found</>;
  }

  return (
    <div className={s['card-list']}>
      {finalData.map(([key, item], index) => (
        <CountryCard
          countryName={key}
          countryData={item}
          key={`${key}-card`}
          id={index}
        />
      ))}
    </div>
  );
};

export default CountryList;

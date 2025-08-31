import React, { useMemo } from 'react';
import type { Country } from '../../models';
import { useAppSelector } from '../../store/hooks';
import { selectYear } from '../../store/selectors';
import CountryTable from '../CountryTable';
import s from './CountryCard.module.scss';

export interface CountryCardProps {
  countryName: string;
  countryData: Country;
  id: number;
}

const CountryCard = ({ countryName, countryData, id }: CountryCardProps) => {
  const isoCode = countryData.iso_code;
  const year = useAppSelector(selectYear);

  const dataByYear = useMemo(
    () =>
      year
        ? countryData.data.find((item) => item.year === Number(year))
        : countryData.data.at(-1),
    [countryData.data, year]
  );

  return (
    <div className={s['card']} id={String(id)}>
      <div className={s['card-information']}>
        <div className={s['main-accent']}>{countryName}</div>
        <div>
          ISO:{' '}
          <span className={s.accent}>{isoCode ? `(${isoCode})` : '(N/A)'}</span>
        </div>
        <div key={dataByYear?.population} className={'highlight'}>
          population:{' '}
          <span className={s.accent}>{dataByYear?.population || 'N/A'}</span>
        </div>
      </div>
      <CountryTable data={countryData.data} />
    </div>
  );
};

export default React.memo(CountryCard);

import type { Country } from '../../models';
import { useAppSelector } from '../../store/hooks';
import { selectYear } from '../../store/selectors';
import CountryTable from '../CountryTable';
import s from './CountryCard.module.scss';

export interface CountryCardProps {
  countryName: string;
  countryData: Country;
  key: number;
  id: number;
}

const CountryCard = ({ countryName, countryData, id }: CountryCardProps) => {
  const isoCode = countryData.iso_code;
  const year = useAppSelector(selectYear);

  const dataByYear = year
    ? countryData.data.find((item) => item.year === Number(year))
    : countryData.data.at(-1);

  if (countryName === 'Afghanistan')
    console.log({ year, dataByYear, countryData });

  return (
    <div className={s['card']} id={String(id)}>
      <div className={s['card-information']}>
        <div className={s.accent}>{countryName}</div>
        {isoCode && <div>{`(${isoCode})`}</div>}
        <div>population: {`${dataByYear?.population || 'N/A'}`}</div>
      </div>
      <div className={s['table-cards']}>
        <CountryTable data={countryData.data} />
      </div>
    </div>
  );
};

export default CountryCard;

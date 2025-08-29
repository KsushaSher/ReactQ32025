import type { Country } from '../../models';
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
  const population = countryData.data.at(-1)?.population;

  return (
    <div className={s['card']} id={String(id)}>
      <div className={s['card-information']}>
        <div className={s.accent}>{countryName}</div>
        {isoCode && <div>{`(${countryData.iso_code})`}</div>}
        {population && (
          <div>{`population: ${countryData.data.at(-1)?.population}`}</div>
        )}
      </div>
      <div className={s['table-cards']}>
        <CountryTable data={countryData.data} />
      </div>
    </div>
  );
};

export default CountryCard;

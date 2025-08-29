import type { CountryData } from '../../models';
import s from './CountryTable.module.scss';

interface CountryTableProps {
  data: CountryData[];
}

const CountryTable = ({ data }: CountryTableProps) => {
  return (
    <div className={s['table-wrapper']}>
      <table>
        <thead>
          <tr>
            <th className={s.thead}>year</th>
            <th className={s.thead}>population</th>
            <th className={s.thead}>co2</th>
            <th className={s.thead}>co2_per_capita</th>
          </tr>
        </thead>
        <tbody>
          {/* {data?.length ? (
            Object.values(data).map((_, id) => (
              <tr key={id}>
                <td>{data[id].year}</td>
                <td>{data[id].population}</td>
                <td>{data[id].cement_co2}</td>
                <td>{data[id].cement_co2_per_capita}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No data available</td>
            </tr>
          )} */}
          <tr>
            <td>{data[0].year}</td>
            <td>{data[0].population}</td>
            <td>{data[0].cement_co2}</td>
            <td>{data[0].cement_co2_per_capita}</td>
          </tr>
          <tr>
            <td>{data[1].year}</td>
            <td>{data[1].population}</td>
            <td>{data[1].cement_co2}</td>
            <td>{data[1].cement_co2_per_capita}</td>
          </tr>
          <tr>
            <td>{data[2].year}</td>
            <td>{data[2].population}</td>
            <td>{data[2].cement_co2}</td>
            <td>{data[2].cement_co2_per_capita}</td>
          </tr>
          <tr>
            <td>{data[3].year}</td>
            <td>{data[3].population}</td>
            <td>{data[3].cement_co2}</td>
            <td>{data[3].cement_co2_per_capita}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;

import type { CountryData } from '../../models';
import { useAppSelector } from '../../store/hooks';
import { selectColumns } from '../../store/selectors/ui.selectors';
import s from './CountryTable.module.scss';

interface CountryTableProps {
  data: CountryData[];
}

const CountryTable = ({ data }: CountryTableProps) => {
  const columns = useAppSelector(selectColumns);

  return (
    <div className={s['table-wrapper']}>
      <table>
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={`column-${col}-${i}`}>{[col]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length ? (
            Object.values(data).map((_, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={`column-${col}`}>{data[i][col] ?? 'N/A'}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No data available</td>
            </tr>
          )}

          {/* <tr>
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
           */}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;

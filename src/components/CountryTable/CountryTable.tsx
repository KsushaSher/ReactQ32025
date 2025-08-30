import type { CountryData } from '../../models';
import { useAppSelector } from '../../store/hooks';
import { selectColumns, selectYear } from '../../store/selectors/ui.selectors';
import s from './CountryTable.module.scss';

interface CountryTableProps {
  data: CountryData[];
}

const CountryTable = ({ data }: CountryTableProps) => {
  const columns = useAppSelector(selectColumns);
  const year = useAppSelector(selectYear);
  const dataByYear = data.find((item) => item.year === Number(year));

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
          {year ? (
            <tr key={dataByYear?.year} className={'highlight'}>
              {columns.map((col) => (
                <td key={`column-${col}`}>{dataByYear?.[col] ?? 'N/A'}</td>
              ))}
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.year}>
                {columns.map((col) => (
                  <td key={`column-${col}`}>{item[col] ?? 'N/A'}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;

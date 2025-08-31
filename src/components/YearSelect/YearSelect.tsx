import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSelectedYear } from '../../store/slices/uiSlice';
import { selectYear } from '../../store/selectors';
import { getListYears } from '../../utils';
import s from './YearSelect.module.scss';

const YEARS = getListYears(1750, 2023);

const YearSelect = () => {
  const dispatch = useAppDispatch();
  const year = useAppSelector(selectYear);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedYear(event.target.value));
  };

  return (
    <div className={s['year-select-wrapper']}>
      <label htmlFor={'years'}>Select year:</label>
      <select id={'years'} value={year} onChange={handleOnChange}>
        <option value="">all years</option>
        {YEARS.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelect;

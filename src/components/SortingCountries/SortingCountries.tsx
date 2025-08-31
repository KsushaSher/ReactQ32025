import s from './SortingCountries.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortOption } from '../../store/selectors/ui.selectors';
import { setSortOption } from '../../store/slices/uiSlice';

const SortingCountries = () => {
  const dispatch = useDispatch();
  const sortOption = useSelector(selectSortOption);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortOption(e.target.value));
  };

  return (
    <fieldset>
      <legend>Select sort type:</legend>
      <div className={s['radio-wrapper']}>
        <div className={s['radio-item']}>
          <input
            type="radio"
            id="asc"
            name="sort"
            value="asc"
            checked={sortOption === 'asc'}
            onChange={handleChange}
          />
          <label htmlFor="asc">asc</label>
        </div>

        <div className={s['radio-item']}>
          <input
            type="radio"
            id="desc"
            name="sort"
            value="desc"
            checked={sortOption === 'desc'}
            onChange={handleChange}
          />
          <label htmlFor="desc">desc</label>
        </div>

        <div className={s['radio-item']}>
          <input
            type="radio"
            id="population"
            name="sort"
            value="population"
            checked={sortOption === 'population'}
            onChange={handleChange}
          />
          <label htmlFor="population">population</label>
        </div>
      </div>
    </fieldset>
  );
};

export default SortingCountries;

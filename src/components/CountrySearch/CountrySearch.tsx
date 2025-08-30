import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectSearchQuery } from '../../store/selectors/ui.selectors';
import { setSearchQuery } from '../../store/slices/uiSlice';

const CountrySearch = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearchQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      name="CountrySearch"
      placeholder="search country"
      value={search}
      onChange={handleChange}
    />
  );
};

export default CountrySearch;

import React from 'react';
import s from './Search.module.scss';

interface Props {
  search: string;
  onChange: (value: string) => void;
  onSubmit: (search: string) => void;
}

const Search: React.FC<Props> = ({ search, onChange, onSubmit }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(search);
  };

  return (
    <form className={s['search-form']} onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="search"
        value={search}
        onChange={handleChange}
        data-testid="input"
      />
      <button
        className="button default"
        type="submit"
        data-testid="button-search"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

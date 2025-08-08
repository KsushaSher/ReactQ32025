import React, { useState } from 'react';
import s from './Search.module.scss';

interface Search {
  search: string;
  onSubmit: (search: string) => void;
}

const Search = ({ search, onSubmit }: Search) => {
  const [value, setValue] = useState(search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form className={s['search-form']} onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="search"
        value={value}
        onChange={handleChange}
        data-testid="input"
      />
      <button
        className="button default-btn"
        type="submit"
        data-testid="button-search"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

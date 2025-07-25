import React, { useEffect, useState } from 'react';
import s from './Search.module.scss';

interface Props {
  onSubmit: (search: string) => void;
}

const Search: React.FC<Props> = ({ onSubmit }) => {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  useEffect(() => {
    onSubmit(search);
  }, [onSubmit, search]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(search);
    localStorage.setItem('search', search.trim());
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    localStorage.setItem('search', search.trim());
  };

  return (
    <form className={s['search-form']} onSubmit={handleOnSubmit}>
      <input
        className="input"
        placeholder="search"
        value={search}
        onChange={handleOnChange}
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

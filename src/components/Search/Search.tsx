'use client';

import React, { useEffect, useState } from 'react';
import s from './Search.module.scss';
import { useTranslations } from 'next-intl';

interface Search {
  search: string;
  onSubmit: (search: string) => void;
}

const Search = ({ search, onSubmit }: Search) => {
  const [value, setValue] = useState(search);
  const t = useTranslations();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(value);
  };

  useEffect(() => {
    setValue(search);
  }, [search]);

  return (
    <form className={s['search-form']} onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder={t('mainPage.options.searchBar')}
        value={value}
        onChange={handleChange}
        data-testid="input"
      />
      <button
        className="button default-btn"
        type="submit"
        data-testid="button-search"
      >
        {t('mainPage.options.searchButton')}
      </button>
    </form>
  );
};

export default Search;

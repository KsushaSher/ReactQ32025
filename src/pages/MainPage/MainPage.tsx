import { Section } from '../../components/Section';
import { Search } from '../../components/Search';
import { CardList } from '../../components/CardList';
import { useCallback, useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import { Outlet, useSearchParams } from 'react-router';
import type React from 'react';
import { fetchCharacters } from '../../services/api';
import s from './MainPage.module.scss';

const MainPage: React.FC = () => {
  const [items, setItems] = useState([]);
  const [pages, setPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page');
  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  const onChange = (value: string) => {
    localStorage.setItem('search', value.trim());
    setSearch(value);
  };

  const handleSubmit = useCallback(
    async (search: string) => {
      try {
        setLoading(true);
        setError('');
        const data = await fetchCharacters(currentPage || '1', search);

        setItems(data.results);
        setPages(data.info.pages);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        console.error(error);
        setLoading(false);
      }
    },
    [currentPage]
  );

  useEffect(() => {
    handleSubmit(localStorage.getItem('search') || '');
  }, [handleSubmit]);

  return (
    <>
      <main>
        <Section loading={loading} error={error}>
          <Search search={search} onChange={onChange} onSubmit={handleSubmit} />
          <Pagination pages={pages} />
          <div className={s['content-wrapper']}>
            <CardList items={items} />
            <Outlet />
          </div>
        </Section>
      </main>
    </>
  );
};

export default MainPage;

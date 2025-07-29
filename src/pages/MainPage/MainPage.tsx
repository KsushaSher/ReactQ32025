import { Section } from '../../components/Section';
import { Search } from '../../components/Search';
import { CardList } from '../../components/CardList';
import { useCallback, useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import { Navigate, Outlet, useSearchParams } from 'react-router';
import type React from 'react';
import { fetchCharacters } from '../../services/api';
import s from './MainPage.module.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { LS_SEARCH_KEY } from '../../utils/constants';

const MainPage: React.FC = () => {
  const [searchLS, setSearchLS] = useLocalStorage(LS_SEARCH_KEY);
  const [items, setItems] = useState([]);
  const [pages, setPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');
  const search = searchParams.get('search') || searchLS;

  const handleSubmit = (value: string) => {
    const search = value.trim();

    setSearchLS(search);
    setSearchParams({ page: '1', ...(search && { search }) });
  };

  const fetchResults = useCallback(async () => {
    if (currentPage) {
      setLoading(true);
      try {
        const data = await fetchCharacters(currentPage, search || '');

        setError('');
        setItems(data.results);
        setPages(data.info.pages);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [search, currentPage]);

  useEffect(() => {
    if (!currentPage)
      setSearchParams(
        { page: '1', ...(search && { search }) },
        { replace: true }
      );
  }, [setSearchParams, currentPage, search]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  if (currentPage && !/^\d+$/.test(currentPage)) {
    return <Navigate to="*" />;
  }

  return (
    <>
      <main>
        <Search search={searchLS} onSubmit={handleSubmit} />
        <Section loading={loading} error={error}>
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

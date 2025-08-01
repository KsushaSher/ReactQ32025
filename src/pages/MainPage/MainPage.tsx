import { Section } from '../../components/Section';
import { Search } from '../../components/Search';
import { CardList } from '../../components/CardList';
import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import { Navigate, Outlet, useSearchParams } from 'react-router';
import s from './MainPage.module.scss';
import { useLocalStorage } from '../../utils/hooks/useLocalStorage';
import { LS_SEARCH_KEY } from '../../shared/constants/ls-keys';
import { charactersAPI } from '../../services/characters-api';
import { ROUTES } from '../../shared/constants/routes';

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchLS, setSearchLS] = useLocalStorage(LS_SEARCH_KEY);

  const currentPage = searchParams.get('page');
  const search = searchParams.get('search') || searchLS;

  const [items, setItems] = useState([]);
  const [pages, setPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (value: string) => {
    const search = value.trim();

    setSearchLS(search);
    setSearchParams({ page: '1', ...(search && { search }) });
  };

  useEffect(() => {
    if (!currentPage)
      setSearchParams(
        { page: '1', ...(search && { search }) },
        { replace: true }
      );
  }, [setSearchParams, currentPage, search]);

  useEffect(() => {
    const fetchResults = async () => {
      if (currentPage) {
        setLoading(true);
        try {
          const data = await charactersAPI.fetchCharacters(
            currentPage,
            search || ''
          );

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
    };

    fetchResults();
  }, [search, currentPage]);

  if (currentPage && !/^\d+$/.test(currentPage)) {
    return <Navigate to={ROUTES.NOT_FOUND} />;
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

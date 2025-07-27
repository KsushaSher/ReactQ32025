import { Section } from '../../components/Section';
import { Search } from '../../components/Search';
import { CardList } from '../../components/CardList';
import { useCallback, useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import { Navigate, Outlet, useNavigate, useSearchParams } from 'react-router';
import type React from 'react';
import { fetchCharacters } from '../../services/api';
import s from './MainPage.module.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { LS_SEARCH_KEY } from '../../utils/constants';

const MainPage: React.FC = () => {
  const [items, setItems] = useState([]);
  const [pages, setPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page');
  const [searchLS, setSearchLS] = useLocalStorage(LS_SEARCH_KEY);
  const navigate = useNavigate();

  const onChange = (value: string) => {
    setSearchLS(value.trim());
  };

  const handleSubmit = useCallback(
    async (searchLS: string) => {
      if (currentPage)
        try {
          setLoading(true);
          setError('');
          const data = await fetchCharacters(currentPage, searchLS);

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
    if (!currentPage) {
      navigate('/?page=1', { replace: true });
    }
  }, [currentPage, navigate]);

  useEffect(() => {
    handleSubmit(localStorage.getItem(LS_SEARCH_KEY) || '');
  }, [handleSubmit]);

  if (currentPage && !/^\d+$/.test(currentPage)) {
    return <Navigate to="*" />;
  }

  return (
    <>
      <main>
        <Section loading={loading} error={error}>
          <Search
            search={searchLS}
            onChange={onChange}
            onSubmit={handleSubmit}
          />
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

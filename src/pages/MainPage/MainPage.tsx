import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Search } from '../../components/Search';
import { CardList } from '../../components/CardList';
import { useCallback, useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import { useSearchParams } from 'react-router';
import type React from 'react';
import { fetchCharacters } from '../../services/api';

const MainPage: React.FC = () => {
  const [items, setItems] = useState([]);
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
      <Header>
        <Search search={search} onChange={onChange} onSubmit={handleSubmit} />
      </Header>
      <main>
        <Section loading={loading} error={error}>
          <Pagination />
          <CardList items={items} />
        </Section>
      </main>
    </>
  );
};

export default MainPage;

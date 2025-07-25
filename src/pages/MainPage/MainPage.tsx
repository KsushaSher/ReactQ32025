import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Search } from '../../components/Search';
import { CardList } from '../../components/CardList';
import { useCallback, useState } from 'react';

const MainPage: React.FC = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(async (search: string) => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=1&name=${search}`
      );

      if (!response.ok && response.status === 404) {
        throw new Error(`No results found`);
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setItems(data.results);
      setLoading(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
      console.error(error);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Header>
        <Search onSubmit={handleSubmit} />
      </Header>
      <main>
        <Section loading={loading} error={error}>
          <CardList items={items} />
        </Section>
      </main>
    </>
  );
};

export default MainPage;

import { useEffect, useRef, useState } from 'react';
import { charactersAPI } from '../../services/characters-api';
import '../../styles/main.scss';
import { Spinner } from '../Spinner';
import type { Item } from '../../models';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import CardDetailContent from '../CardDetailContent';
import { ROUTES } from '../../shared/constants/routes';

const CardDetail = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.toString();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const cardRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [item, setItem] = useState<Item | null>();

  useEffect(() => {
    const getCharacterData = async (id: string) => {
      try {
        setLoading(true);
        const data = await charactersAPI.fetchCharacterById(id);

        setError('');
        setItem(data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        console.error(error);
        setLoading(false);
      }
    };

    if (id) {
      getCharacterData(id);
    }
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        navigate({ pathname: ROUTES.ROOT, search });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navigate, search]);

  return loading ? (
    <Spinner />
  ) : error ? (
    <div data-testid="error">{error}</div>
  ) : !item ? (
    <div>No result</div>
  ) : (
    <CardDetailContent item={item} search={search} cardRef={cardRef} />
  );
};

export default CardDetail;

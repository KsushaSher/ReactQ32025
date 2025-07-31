import { useCallback, useEffect, useRef, useState } from 'react';
import { characterAPI } from '../../services/api';
import '../../styles/main.scss';
import { Spinner } from '../Spinner';
import type { Item } from '../../models';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import CardDetailContent from '../CardDetailContent';
import { ROUTES } from '../../shared/constants/apiRoutes';

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

  const getCharacterData = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const data = await characterAPI.fetchCharacterById(id);

      setError('');
      setItem(data);
      setLoading(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
      console.error(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      getCharacterData(id);
    }
  }, [id, getCharacterData]);

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

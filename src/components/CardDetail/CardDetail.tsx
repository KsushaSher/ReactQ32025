import { useCallback, useEffect, useRef } from 'react';
import '../../styles/main.scss';
import { Spinner } from '../Spinner';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import CardDetailContent from '../CardDetailContent';
import { ROUTES } from '../../shared/constants/routes';
import { useGetCharacterByIdQuery } from '../../store/api/charactersApi';

const CardDetail = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.toString();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id || '';

  const cardRef = useRef<HTMLDivElement>(null);

  const { data, error, isLoading } = useGetCharacterByIdQuery(id);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        navigate({ pathname: ROUTES.ROOT, search });
      }
    },
    [navigate, search]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div data-testid="error">
      <div>Oh no, there was an error:</div>
      {'status' in error ? `Status: ${error.status}` : 'Unexpected error'}
    </div>
  ) : !data ? (
    <div>No result</div>
  ) : (
    <CardDetailContent item={data} search={search} cardRef={cardRef} />
  );
};

export default CardDetail;

'use client';

import '../../styles/main.scss';
import { Spinner } from '../Spinner';
import CardDetailContent from '../CardDetailContent';
import { useGetCharacterByIdQuery } from '../../store/api/charactersApi';
import { useRouter } from 'next/navigation';
import { ROUTES } from '../../shared/constants/routes';
import { useCallback, useEffect, useRef } from 'react';

const CardDetail = ({ id, search }: { id: string; search: string }) => {
  const searchParams = search;
  const router = useRouter();

  console.log(searchParams);

  const cardRef = useRef<HTMLDivElement>(null);

  const { data, error, isLoading } = useGetCharacterByIdQuery(id);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      console.log('click');

      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        router.push(ROUTES.ROOT);
        console.log('++');
      }
    },
    [router]
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
    <CardDetailContent item={data} search={search} ref={cardRef} />
  );
};

export default CardDetail;

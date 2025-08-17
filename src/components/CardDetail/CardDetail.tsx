'use client';

import '../../styles/main.scss';
import { Spinner } from '../Spinner';
import CardDetailContent from '../CardDetailContent';
import { useGetCharacterByIdQuery } from '../../store/api/charactersApi';
import { useRouter } from '../../i18n/navigation';
import { ROUTES } from '../../shared/constants/routes';
import { useCallback, useEffect, useRef } from 'react';
import React from 'react';

const CardDetail = ({ id }: { id: string }) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const { data, error, isLoading } = useGetCharacterByIdQuery(id);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        router.push(ROUTES.ROOT);
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
    <CardDetailContent item={data} ref={cardRef} />
  );
};

export default CardDetail;

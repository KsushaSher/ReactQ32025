import React from 'react';
import s from './Pagination.module.scss';
import { useSearchParams } from 'react-router';

const Pagination: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const handlePrev = () => {
    setSearchParams({ page: String(currentPage - 1) });
  };
  const handleNext = () => {
    setSearchParams({ page: String(currentPage + 1) });
  };

  return (
    <div className={s['pagination-wrapper']}>
      <button className={s.prev} onClick={handlePrev}>
        Prev
      </button>
      <span className={s['current-page']}>Page: {currentPage}</span>
      <button className={s.next} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

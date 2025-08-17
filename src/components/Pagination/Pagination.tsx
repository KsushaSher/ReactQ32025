'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import s from './Pagination.module.scss';
import { useTranslations } from 'next-intl';
import React from 'react';

interface Pagination {
  pages: number | undefined;
}

const Pagination = ({ pages }: Pagination) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = useTranslations();

  const currentPage = Number(searchParams?.get('page')) || 1;

  const handlePrev = () => {
    if (currentPage > 1) {
      router.replace(`?page=${currentPage - 1}`);
    }
  };

  const handleNext = () => {
    if (pages && currentPage < pages) {
      router.replace(`?page=${currentPage + 1}`);
    }
  };

  return (
    <div className={s['pagination-wrapper']}>
      <button className="button light-btn" onClick={handlePrev}>
        {t('mainPage.cardsSection.paginationPrev')}
      </button>
      <span className={s['current-page']}>
        {currentPage}/{pages}
      </span>
      <button className="button light-btn" onClick={handleNext}>
        {t('mainPage.cardsSection.paginationNext')}
      </button>
    </div>
  );
};

export default Pagination;

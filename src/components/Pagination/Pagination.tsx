'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import s from './Pagination.module.scss';

interface Pagination {
  pages: number | undefined;
}

const Pagination = ({ pages }: Pagination) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams?.get('page')) || 1;

  const handlePrev = () => {
    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`);
    }
  };

  const handleNext = () => {
    if (pages && currentPage < pages) {
      router.push(`?page=${currentPage + 1}`);
    }
  };

  return (
    <div className={s['pagination-wrapper']}>
      <button className="button light-btn" onClick={handlePrev}>
        Prev
      </button>
      <span className={s['current-page']}>
        {currentPage}/{pages}
      </span>
      <button className="button light-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

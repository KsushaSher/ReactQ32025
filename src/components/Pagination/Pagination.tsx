import s from './Pagination.module.scss';
import { useSearchParams } from 'react-router';

interface Pagination {
  pages: number | null;
}

const Pagination = ({ pages }: Pagination) => {
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
      <button className="button light" onClick={handlePrev}>
        Prev
      </button>
      <span className={s['current-page']}>
        {currentPage}/{pages}
      </span>
      <button className="button light" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

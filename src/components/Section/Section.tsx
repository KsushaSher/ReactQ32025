import s from './Section.module.scss';
import { Spinner } from '../Spinner';

interface Section {
  error?: string;
  loading: boolean;
  children: React.ReactNode;
}

const Section = ({ loading, error, children }: Section) => {
  return (
    <section className={s.section}>
      {loading ? (
        <Spinner data-testid="spinner" />
      ) : error ? (
        <div data-testid="error">{error}</div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;

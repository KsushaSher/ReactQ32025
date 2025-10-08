import s from './Section.module.scss';
import { Spinner } from '../Spinner';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

interface Section {
  error?: FetchBaseQueryError | SerializedError | undefined;
  loading: boolean;
  children: React.ReactNode;
}

const Section = ({ loading, error, children }: Section) => {
  return (
    <section className={s.section}>
      {loading ? (
        <Spinner data-testid="spinner" />
      ) : error ? (
        <div data-testid="error">
          <div>Oh no, there was an error:</div>
          {'status' in error ? `Status: ${error.status}` : 'Unexpected error'}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;

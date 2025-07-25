import React from 'react';
import s from './Section.module.scss';
import { Spinner } from '../Spinner';

interface Props {
  error?: string;
  loading: boolean;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ loading, error, children }) => {
  return (
    <section>
      {loading ? (
        <Spinner data-testid="spinner" />
      ) : error ? (
        <div className={s['error-message']} data-testid="error">
          {error}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;

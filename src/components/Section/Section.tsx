import React from 'react';
import Spinner from '../Spinner/Spinner';
import s from './Section.module.scss';

interface Props {
  error?: string;
  loading: boolean;
  children: React.ReactNode;
}

interface State {
  search: string;
}

class Section extends React.Component<Props, State> {
  render() {
    const { children, loading, error } = this.props;

    return (
      <section>
        {loading ? (
          <Spinner data-testid="spinner" />
        ) : error ? (
          <div className={s['error-message']}>{error}</div>
        ) : (
          children
        )}
      </section>
    );
  }
}

export default Section;

import React from 'react';
import s from './Spinner.module.scss';

const Spinner: React.FC = () => {
  return (
    <div className={s['loader-wrapper']} data-testid="spinner">
      <div className={s.loader}></div>
    </div>
  );
};

export default Spinner;

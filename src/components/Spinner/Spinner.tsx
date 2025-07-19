import React from 'react';
import s from './Spinner.module.scss';

type Props = Record<string, never>;
type State = Record<string, never>;

class Spinner extends React.Component<Props, State> {
  render() {
    return (
      <div className={s['loader-wrapper']}>
        <div className={s.loader}></div>
      </div>
    );
  }
}

export default Spinner;

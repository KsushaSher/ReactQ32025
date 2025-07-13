import { ButtonError } from '../ButtonError';
import React from 'react';
import s from './Header.module.scss';

interface Props {
  children: React.ReactNode;
}

interface State {
  search: string;
}

class Header extends React.Component<Props, State> {
  render() {
    return (
      <header className={s.header}>
        <div className={`${s.wrapper} ${s['wrapper-header']}`}>
          {this.props.children}
          <ButtonError />
        </div>
      </header>
    );
  }
}

export default Header;

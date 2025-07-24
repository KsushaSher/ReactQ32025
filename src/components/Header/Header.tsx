import React from 'react';
import s from './Header.module.scss';
import { ErrorButton } from '../ErrorButton';

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
          <ErrorButton />
        </div>
      </header>
    );
  }
}

export default Header;

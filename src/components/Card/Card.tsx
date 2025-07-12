import React from 'react';
import type { ResultsProperties } from '../../models';
import s from './Card.module.scss';

type State = Record<string, never>;

export interface Props {
  item: ResultsProperties;
}

class Card extends React.Component<Props, State> {
  render() {
    return (
      <div className={s['wrapper-cards']}>
        <div>{this.props.item.name}</div>
      </div>
    );
  }
}

export default Card;

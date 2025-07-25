import React from 'react';
import type { Item } from '../../models';
import { Card } from '../Card';
import s from './CardList.module.scss';

type State = Record<string, never>;

export interface Props {
  items: Item[];
}
class CardList extends React.Component<Props, State> {
  render() {
    return this.props.items.length === 0 ? (
      <div className={s.wrapper}>No results</div>
    ) : (
      <div className={s.wrapper}>
        <div className={s['wrapper-cards']}>
          {this.props.items.map((item) => (
            <Card item={item} key={item.id} data-testid="card" />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;

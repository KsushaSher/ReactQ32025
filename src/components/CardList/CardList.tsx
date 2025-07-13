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
    return (
      <div className={s.wrapper}>
        {this.props.items.length === 0 ? (
          <p>No results found</p>
        ) : (
          <div className={s['wrapper-cards']}>
            {this.props.items.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CardList;

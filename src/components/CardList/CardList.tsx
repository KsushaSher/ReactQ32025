import React from 'react';
import type { Item } from '../../models';
import { Card } from '../Card';
import s from './CardList.module.scss';

export interface Props {
  items: Item[];
}
const CardList: React.FC<Props> = ({ items }) => {
  return items.length === 0 ? (
    <div className={s.wrapper}>No results</div>
  ) : (
    <div className={s.wrapper}>
      <div className={s['wrapper-cards']}>
        {items.map((item) => (
          <Card item={item} key={item.id} data-testid="card" />
        ))}
      </div>
    </div>
  );
};

export default CardList;

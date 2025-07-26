import React from 'react';
import type { Item } from '../../models';
import s from './Card.module.scss';
import { NavLink } from 'react-router';
export interface Props {
  item: Item;
}

const Card: React.FC<Props> = ({ item }) => {
  return (
    <div className={s['card']} data-testid="card">
      <div className={s['img-wrapper']}>
        <img
          src={item.image}
          alt={`${item.name} avatar`}
          className={s.img}
        ></img>
      </div>
      <div className={`${s.name} ${s.neutral}`}>
        Name: <span className={s['accent']}>{item.name}</span>
      </div>
      <div className={`${s.species} ${s.neutral}`}>
        Species: <span className={s['accent']}>{item.species}</span>
      </div>
      <NavLink to={`/character/${item.id}`}>detail</NavLink>
    </div>
  );
};

export default Card;

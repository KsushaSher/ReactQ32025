import React from 'react';
import type { Item } from '../../models';
import s from './Card.module.scss';

type State = Record<string, never>;

export interface Props {
  item: Item;
}

class Card extends React.Component<Props, State> {
  render() {
    return (
      <div className={s['card']}>
        <div className={s['img-wrapper']}>
          <img src={this.props.item.image} className={s.img}></img>
        </div>
        <div className={`${s.name} ${s.neutral}`}>
          Name: <span className={s['accent']}>{this.props.item.name}</span>
        </div>
        <div className={`${s.species} ${s.neutral}`}>
          Species:{' '}
          <span className={s['accent']}>{this.props.item.species}</span>
        </div>
      </div>
    );
  }
}

export default Card;

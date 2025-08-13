import type { CharacterItem } from '../../models';
import s from './CardList.module.scss';
import Card from '../Card';

export interface CardList {
  items: CharacterItem[] | undefined;
}

const CardList = ({ items }: CardList) => {
  if (!items) return;

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

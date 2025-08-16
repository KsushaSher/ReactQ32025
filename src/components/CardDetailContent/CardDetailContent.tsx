import type { CharacterItem } from '../../models';
import { ROUTES } from '../../shared/constants/routes';
import s from './CardDetailContent.module.scss';
import Link from 'next/link';

interface CardDetailContent {
  item: CharacterItem;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const CardDetailContent = ({ item, ref }: CardDetailContent) => {
  return (
    <div className={s['card-detail']} ref={ref} data-testid="card-detail">
      <Link className={s['close-button']} href={ROUTES.ROOT} />
      <div className={s['img-wrapper']}>
        <img src={item.image} alt={`${item.name} avatar`} className={s.img} />
      </div>
      <div className={`${s.name} ${s.neutral}`}>
        Name: <span className={s['accent']}>{item.name}</span>
      </div>
      <div className={`${s.species} ${s.neutral}`}>
        Species: <span className={s['accent']}>{item.species}</span>
      </div>
      <div className={`${s.species} ${s.neutral}`}>
        Status: <span className={s['accent']}>{item.status}</span>
      </div>
      <div className={`${s.species} ${s.neutral}`}>
        Gender: <span className={s['accent']}>{item.gender}</span>
      </div>
    </div>
  );
};

export default CardDetailContent;

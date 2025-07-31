import type { Item } from '../../models';
import { ROUTES } from '../../shared/constants/apiRoutes';
import s from './CardDetailContent.module.scss';
import { NavLink } from 'react-router';

interface CardDetailContent {
  item: Item;
  search: string;
  cardRef: React.RefObject<HTMLDivElement | null>;
}

const CardDetailContent = ({ item, search, cardRef }: CardDetailContent) => {
  return (
    <div className={s['card-detail']} ref={cardRef} data-testid="card-detail">
      <NavLink
        className={s['close-button']}
        to={{ pathname: ROUTES.ROOT, search }}
      ></NavLink>
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

import type { Item } from '../../models';
import { ROUTES } from '../../shared/constants/routes';
import { setSelected } from '../../store/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getIsSelected } from '../../store/selectors/selectors';
import s from './Card.module.scss';
import { NavLink, useSearchParams } from 'react-router';
export interface Card {
  item: Item;
}

const Card = ({ item }: Card) => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const id = String(item.id);
  const isSelected = useAppSelector((state) => getIsSelected(state, id));
  const handleToggle = () => dispatch(setSelected(id));

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
      <NavLink
        className={s['details-button']}
        to={{
          pathname: `${ROUTES.CHARACTER.ROOT}/${item.id}`,
          search: searchParams.toString(),
        }}
        onMouseDown={(e) => e.stopPropagation()}
      ></NavLink>
      <input
        type="checkbox"
        className={s['checkbox-card']}
        onChange={handleToggle}
        checked={isSelected}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Card;

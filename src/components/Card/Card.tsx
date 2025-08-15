import type { CharacterItem } from '../../models';
import { ROUTES } from '../../shared/constants/routes';
import { useAppDispatch } from '../../store/hooks';
import { toggleSelectedСharacter } from '../../store/slices/charactersSlice';
import { useIsCardSelected } from '../../utils/hooks/is-card-selected';
import s from './Card.module.scss';
import Link from 'next/link';
export interface Card {
  item: CharacterItem;
}

const Card = ({ item }: Card) => {
  // const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const id = String(item.id);
  const isCardSelected = useIsCardSelected(id);
  const handleToggle = () => dispatch(toggleSelectedСharacter(id));

  return (
    <div className={s['card']} data-testid="card">
      <div className={s['img-wrapper']}>
        <img src={item.image} alt={`${item.name} avatar`} className={s.img} />
      </div>
      <div className={`${s.name} ${s.neutral}`}>
        Name: <span className={s['accent']}>{item.name}</span>
      </div>
      <div className={`${s.species} ${s.neutral}`}>
        Species: <span className={s['accent']}>{item.species}</span>
      </div>
      <Link
        className={s['details-button']}
        href={{
          pathname: `${ROUTES.CHARACTER.ROOT}/${item.id}`,
          // search: searchParams.toString(),
        }}
        onMouseDown={(e) => e.stopPropagation()}
      ></Link>
      <input
        type="checkbox"
        className={s['checkbox-card']}
        onChange={handleToggle}
        checked={isCardSelected}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Card;

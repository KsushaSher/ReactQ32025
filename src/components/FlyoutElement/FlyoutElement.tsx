import { useAppSelector } from '../../store/hook';
import { getCount } from '../../store/selectors/selectors';
import s from './FlyoutElement.module.scss';

const FlyoutElement = () => {
  const count = useAppSelector(getCount);

  return count > 0 ? (
    <div className={s['wrapper-flyout']}>
      <p>
        {count} item{count === 1 ? '' : 's'} are selected:
      </p>
      <button className="button light">Unselect all</button>
      <button className="button light">Download</button>
    </div>
  ) : null;
};

export default FlyoutElement;

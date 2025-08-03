import { reset } from '../../store/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import s from './FlyoutElement.module.scss';
import { getArraySelectedId, getCount } from '../../store/selectors';
import { getCharactersData } from '../../utils/getCharactersData';
import { downloadCSV } from '../../utils/downloadCSV';
import { convertToCSV } from '../../utils/convertToCSV';

const FlyoutElement = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(getCount);
  const ids = useAppSelector(getArraySelectedId);

  const handleClickDownload = async () => {
    const сharacterData = await getCharactersData(ids);
    const csv = convertToCSV(сharacterData);

    downloadCSV(csv, count);
  };

  const handleClickReset = () => {
    dispatch(reset());
  };

  return count > 0 ? (
    <div className={s['wrapper-flyout']}>
      <p>
        {count} item{count === 1 ? '' : 's'} are selected:
      </p>
      <button onClick={handleClickReset} className="button light-btn">
        Unselect all
      </button>
      <button onClick={handleClickDownload} className="button light-btn">
        Download
      </button>
    </div>
  ) : null;
};

export default FlyoutElement;

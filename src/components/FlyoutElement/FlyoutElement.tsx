import { resetSelectedСharacter } from '../../store/slices/charactersSlice';
import s from './FlyoutElement.module.scss';
import { selectSelectedCharacters, selectCount } from '../../store/selectors';
import { downloadCSV } from '../../utils/downloadCSV';
import { convertToCSV } from '../../utils/convertToCSV';
import { getCharactersData } from '../../utils/getCharactersData';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useLazyGetCharacterByIdQuery } from '../../store/charactersApi';

const FlyoutElement = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const ids = useAppSelector(selectSelectedCharacters);
  const [getCharacterById] = useLazyGetCharacterByIdQuery();

  const handleClickDownload = async () => {
    try {
      const сharacterData = await getCharactersData(ids, getCharacterById);
      const csv = convertToCSV(сharacterData);

      downloadCSV(csv, count);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickReset = () => {
    dispatch(resetSelectedСharacter());
  };

  if (count <= 0) {
    return null;
  }

  return (
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
  );
};

export default FlyoutElement;

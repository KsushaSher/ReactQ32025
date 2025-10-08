import { resetSelectedСharacter } from '../../store/slices/charactersSlice';
import s from './FlyoutElement.module.scss';
import { selectSelectedCharacters, selectCount } from '../../store/selectors';
import { convertToCSV } from '../../utils/convertToCSV';
import { getCharactersData } from '../../utils/getCharactersData';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useLazyGetCharacterByIdQuery } from '../../store/api/charactersApi';
import { useRef, useState } from 'react';

const FlyoutElement = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const ids = useAppSelector(selectSelectedCharacters);
  const [getCharacterById] = useLazyGetCharacterByIdQuery();
  const [downloadUrl, setDownloadUrl] = useState('');
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  const downloadCSV = (csv: string) => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    setDownloadUrl(url);

    setTimeout(() => {
      if (downloadRef.current?.href) {
        downloadRef.current.click();
        URL.revokeObjectURL(url);
        setDownloadUrl('');
      }
    }, 1000);
  };

  const handleClickDownload = async () => {
    try {
      const сharacterData = await getCharactersData(ids, getCharacterById);
      const csv = convertToCSV(сharacterData);

      downloadCSV(csv);
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
      <a
        ref={downloadRef}
        href={downloadUrl}
        download={`${count}_items.csv`}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default FlyoutElement;

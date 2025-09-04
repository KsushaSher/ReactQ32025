import { resetSelectedСharacter } from '../../store/slices/charactersSlice';
import s from './FlyoutElement.module.scss';
import { selectSelectedCharacters, selectCount } from '../../store/selectors';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Link } from '../../i18n/navigation';

const FlyoutElement = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const ids = useAppSelector(selectSelectedCharacters);
  const [downloadUrl, setDownloadUrl] = useState('');
  const downloadRef = useRef<HTMLAnchorElement | null>(null);
  const t = useTranslations();

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
      const res = await fetch('/api/csv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids }),
      });

      if (!res.ok) throw new Error('Download error');

      const csv = await res.text();

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
        {t('flyoutElement.text')}
        {count}
      </p>
      <button onClick={handleClickReset} className="button light-btn">
        {t('flyoutElement.unselect')}
      </button>
      <button onClick={handleClickDownload} className="button light-btn">
        {t('flyoutElement.download')}
      </button>
      <Link
        ref={downloadRef}
        href={downloadUrl}
        download={`${count}_items.csv`}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default FlyoutElement;

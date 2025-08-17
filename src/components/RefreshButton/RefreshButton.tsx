import { useDispatch } from 'react-redux';
import { charactersApi } from '../../store/api/charactersApi';
import { useTranslations } from 'next-intl';
import React from 'react';

const RefreshButton = () => {
  const dispatch = useDispatch();
  const t = useTranslations();

  const handleClick = () => {
    dispatch(
      charactersApi.util.invalidateTags([
        { type: 'Characters', id: 'LIST' },
        { type: 'Character', id: 'LIST' },
      ])
    );
  };

  return (
    <button
      className="button refresh-btn"
      onMouseDown={(e) => e.stopPropagation()}
      onClick={handleClick}
      data-testid="refresh-boundary"
    >
      {t('mainPage.options.refreshCache')}
    </button>
  );
};

export default RefreshButton;

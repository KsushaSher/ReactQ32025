import React from 'react';
import type { CharacterItem } from '../../models';
import { ROUTES } from '../../shared/constants/routes';
import s from './CardDetailContent.module.scss';
import { Link } from '../../i18n/navigation';
import { useTranslations } from 'next-intl';

interface CardDetailContent {
  item: CharacterItem;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const CardDetailContent = ({ item, ref }: CardDetailContent) => {
  const t = useTranslations();

  return (
    <div className={s['card-detail']} ref={ref} data-testid="card-detail">
      <Link className={s['close-button']} href={ROUTES.ROOT} />
      <div className={s['img-wrapper']}>
        <img src={item.image} alt={`${item.name} avatar`} className={s.img} />
      </div>
      <div className={`${s.name} ${s.neutral}`}>
        {t('mainPage.cardsSection.name')}{' '}
        <span className={s['accent']}>{item.name}</span>
      </div>
      <div className={`${s.species} ${s.neutral}`}>
        {t('mainPage.cardsSection.species')}{' '}
        <span className={s['accent']}>{item.species}</span>
      </div>
      <div className={`${s.species} ${s.neutral}`}>
        {t('mainPage.cardsSection.status')}{' '}
        <span className={s['accent']}>{item.status}</span>
      </div>
      <div className={`${s.species} ${s.neutral}`}>
        {t('mainPage.cardsSection.gender')}{' '}
        <span className={s['accent']}>{item.gender}</span>
      </div>
    </div>
  );
};

export default CardDetailContent;

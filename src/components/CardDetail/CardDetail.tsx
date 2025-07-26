import React from 'react';
import s from './CardDetail.module.scss';

const CardDetail: React.FC = () => {
  console.log('открылись детали карточки');

  return <div className={s['card-details']}>Card Detail</div>;
};

export default CardDetail;

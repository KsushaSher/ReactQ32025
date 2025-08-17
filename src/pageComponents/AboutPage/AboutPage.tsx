import { REACT_COURSE } from '../../shared/constants/urls';
import Image from 'next/image';
import s from './AboutPage.module.scss';
import avatar from '/public/images/ava3.jpg';
import rssLogo from '/public/images/svg/rss-logo.svg';

const AboutPage = () => {
  return (
    <div className={s['about-page']} data-testid="about-page">
      <div className={s.content}>
        <Image
          src={avatar.src}
          alt={'avatar'}
          width={160}
          height={160}
          className={s.img}
        />
        <div>
          Architectural and design thinking have always been part of my work,
          but I wanted to expand my horizons and find a new direction where
          creativity and structure meet. Frontend was exactly what I was looking
          for. The course helped me see how visual experience can be applied in
          a digital environment and inspired me to move in this direction with
          full confidence.
        </div>
      </div>
      <a href={REACT_COURSE} target="_blank" rel="noopener noreferrer">
        <Image
          src={rssLogo.src}
          alt={'rss-logo'}
          width={50}
          height={50}
          data-testid="rs-logo"
          className={s['rss-logo']}
        />
      </a>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import s from './AboutPage.module.scss';

const AboutPage: React.FC = () => {
  return (
    <div className={s['about-page']} data-testid="about-page">
      <div className={s.content}>
        <img
          src="../../../public/images/ava3.jpg"
          alt={'avatar'}
          className={s.img}
        ></img>
        <div>
          Architectural and design thinking have always been part of my work,
          but I wanted to expand my horizons and find a new direction where
          creativity and structure meet. Frontend was exactly what I was looking
          for. The course helped me see how visual experience can be applied in
          a digital environment and inspired me to move in this direction with
          full confidence.
        </div>
      </div>
      <a
        href="https://rs.school/courses/reactjs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={s['rs-logo']}
          src="https://rs.school/_next/static/media/rss-logo.c19ce1b4.svg"
          data-testid="rs-logo"
        ></img>
      </a>
    </div>
  );
};

export default AboutPage;

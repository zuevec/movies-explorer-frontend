import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </span>
        <div className="footer__bottom-block">
          <span className="footer__copyrights">&copy; 2023</span>
          <div className="footer__socials">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__link"
              href="https://github.com/zuevec"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

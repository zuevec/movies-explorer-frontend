import React from 'react';
import './Portfolio.css';
import arrow from '../../images/portfolio-arrow-icon.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        {' '}
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__projects">
          <li>
            <a
              className="portfolio__link"
              target="_blank"
              href="https://github.com/zuevec/how-to-learn"
              rel="noreferrer"
            >
              Статичный сайт
              <span>
                <img
                  src={arrow}
                  alt="Логотип"
                  className="portfolio__link-image"
                />
              </span>
            </a>
          </li>
          <li>
            <a
              className="portfolio__link"
              target="_blank"
              href="https://github.com/zuevec/russian-travel"
              rel="noreferrer"
            >
              Адаптивный сайт
              <span>
                <img
                  src={arrow}
                  alt="Логотип"
                  className="portfolio__link-image"
                />
              </span>
            </a>
          </li>
          <li>
            <a
              className="portfolio__link"
              target="_blank"
              href="https://github.com/zuevec/react-mesto-api-full-gha"
              rel="noreferrer"
            >
              Одностраничное приложение
              <span>
                <img
                  src={arrow}
                  alt="Логотип"
                  className="portfolio__link-image"
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;

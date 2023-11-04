import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__descriptions">
        <div className="about__description">
          <h3 className="about__description-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__description-paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__description">
          <h3 className="about__description-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__description-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div>
        <div className="about__timelines">
          <div className="about__backend">1 Неделя</div>
          <div className="about__frontend">4 Недели</div>
        </div>
        <div className="about__time-text">
          <div className="about__backend-text">Back-end</div>
          <div className="about__frontend-text">Front-end</div>
        </div>
      </div>
    </section>
  );
};

export default About;

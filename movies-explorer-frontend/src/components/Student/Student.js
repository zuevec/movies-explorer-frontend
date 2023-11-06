import React from 'react';
import './Student.css';
import photo from '../../images/me.jpg';

const Student = () => {
  return (
    <section className="student">
      <div className="student__container">
        <h2 className="student__title">Студент</h2>
        <div className="student__content">
          <div className="student__info">
            <h3 className="student__name">Дмитрий</h3>
            <span className="student__job">Фронтенд-разработчик, 35 лет</span>
            <p className="student__about">
              Учусь учиться. Работаю не ради работы.
            </p>
            <a
              className="student__link"
              href="https://github.com/zuevec"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img className="student__photo" src={photo} alt="Моё фото" />
        </div>
      </div>
    </section>
  );
};

export default Student;

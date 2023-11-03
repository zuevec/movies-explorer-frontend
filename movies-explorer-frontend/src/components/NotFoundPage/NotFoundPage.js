import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="page__container">
      <div className="page__info-container">
        <span className="page__code">404</span>
        <h1 className="page__code-description">Страница не найдена</h1>
      </div>
      <Link to="/" className="page__link">
        Назад
      </Link>
    </div>
  );
};

export default NotFoundPage;

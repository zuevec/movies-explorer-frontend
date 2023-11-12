import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page__container">
      <div className="page__info-container">
        <span className="page__code">404</span>
        <h1 className="page__code-description">Страница не найдена</h1>
      </div>

      <Link
        onClick={() => navigate(-1, { replace: true })}
        className="page__link"
      >
        Назад
      </Link>
    </div>
  );
};

export default NotFoundPage;

import React from 'react';
import './BurgerMenu.css';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../../images/profile-icon.svg';

const BurgerMenu = ({ onClose, loggedIn }) => {
  const location = useLocation();
  return (
    <div className={loggedIn ? 'burger' : 'burger_hide'}>
      <div className="burger__font">
        <div className="burger__container">
          <button
            type="button"
            className="burger__close-button"
            onClick={() => onClose()}
          />
          <div className="burger__menu">
            <Link
              to="/"
              className={
                location.pathname === '/'
                  ? 'burger__link_active'
                  : 'burger__link'
              }
            >
              Главная
            </Link>
            <Link
              to="/movies"
              className={
                location.pathname === '/movies'
                  ? 'burger__link_active'
                  : 'burger__link'
              }
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={
                location.pathname === '/saved-movies'
                  ? 'burger__link_active'
                  : 'burger__link'
              }
            >
              Сохранённые фильмы
            </Link>
          </div>
          <Link className="burger__button-profile" to="/profile">
            Аккаунт{' '}
            <img
              src={profileIcon}
              alt="Иконка кнопки профиля"
              className="burger__button-image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;

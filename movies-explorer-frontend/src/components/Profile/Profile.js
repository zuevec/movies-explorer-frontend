import React, { useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';

const Profile = ({ loggedIn }) => {
  const [name, setName] = useState('Дима');
  const [email, setEmail] = useState('test@yandex.ru');
  const [isShown, setIsShown] = useState(true);

  const clickEditButton = () => setIsShown(!isShown);
  return (
    <>
      <Header loggedIn={loggedIn} />
      <div className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <div className="profile__value">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="profile__input"
              required
              placeholder="Имя"
            />
          </div>
          <div className="profile__line"></div>
          <div className="profile__value">
            <label className="profile__label">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="profile__input"
              required
              placeholder="pochta@yandex.ru"
            />
          </div>
        </form>
        {isShown && (
          <div className="profile__control">
            <button className="profile__edit" onClick={clickEditButton}>
              Редактировать
            </button>
            <button className="profile__logout">Выйти из аккаунта</button>
          </div>
        )}

        {!isShown && (
          <div className="profile__control">
            <button className="profile__save" type="submit">
              Сохранить
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;

import React, { useState, useContext, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';

const Profile = ({
  loggedIn,
  onSignOut,
  onUpdateUser,
  userMessage,
  userMessageError,
}) => {
  const [isShown, setIsShown] = useState(true);
  const clickEditButton = () => setIsShown(!isShown);

  const currentUser = useContext(CurrentUserContext);
  const { enteredValues, handleChange, resetForm, isValid } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email,
    });
    setIsShown(true);
  };

  useEffect(() => {
    currentUser ? resetForm(currentUser) : resetForm();
  }, [currentUser, resetForm]);

  const wrong =
    !isValid ||
    (currentUser.name === enteredValues.name &&
      currentUser.email === enteredValues.email);
  return (
    <>
      <Header loggedIn={loggedIn} />
      <div className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form form" onSubmit={handleSubmit}>
          <div className="profile__value">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              name="name"
              value={enteredValues.name || ''}
              onChange={handleChange}
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
              name="email"
              value={enteredValues.email || ''}
              onChange={handleChange}
              className="profile__input"
              required
              placeholder="pochta@yandex.ru"
            />
          </div>

          <div className="profile__control">
            {userMessage ? (
              <span>{userMessage}</span>
            ) : (
              <span className="profile__error">{userMessageError}</span>
            )}

            {isShown && (
              <>
                <button className="profile__edit" onClick={clickEditButton}>
                  Редактировать
                </button>
                <button className="profile__logout" onClick={() => onSignOut()}>
                  Выйти из аккаунта
                </button>
              </>
            )}

            {!isShown && (
              <button className="profile__save" type="submit" disabled={wrong}>
                Сохранить
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;

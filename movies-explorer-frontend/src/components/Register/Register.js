import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import useForm from '../../hooks/useForm';

const Register = ({ onRegister, userMessageError }) => {
  const { enteredValues, errors, handleChange, isValid } = useForm();
  const [isShown, setIsShown] = useState(true);
  const clickRegButton = () => setIsShown(!isShown);

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(enteredValues);
    setIsShown(true);
  };

  return (
    <section className="register">
      <div className="register__header">
        <Link to="/">
          <img className="register__logo" alt="Логотип" src={logo} />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form className="register__form form" onSubmit={handleSubmit}>
        <label className="register__label" htmlFor="name">
          Имя
        </label>
        <input
          className="register__input"
          type="text"
          id="name"
          name="name"
          minLength={2}
          maxLength={30}
          required
          value={enteredValues.name || ''}
          onChange={handleChange}
          placeholder="Имя"
        />
        <span className="register__error">{errors.name}</span>
        <label className="register__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="register__input"
          type="email"
          id="email"
          name="email"
          required
          value={enteredValues.email || ''}
          onChange={handleChange}
          placeholder="E-mail"
        />
        <span className="register__error">{errors.email}</span>
        <label className="register__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="register__input"
          type="password"
          id="password"
          name="password"
          required
          value={enteredValues.password || ''}
          onChange={handleChange}
          placeholder="Пароль"
        />
        <span className="register__error">{errors.password}</span>
        <span className="register__error">{userMessageError}</span>
        <button
          onClick={clickRegButton}
          className="register__button"
          type="submit"
          disabled={!isValid && isShown}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className="register__signin">
        <span>Уже зарегистрированы?</span>
        <Link to="/signin" className="register__link">
          Войти
        </Link>
      </div>
    </section>
  );
};

export default Register;

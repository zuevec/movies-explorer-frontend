import React, { useState } from 'react';
import './Login.css';
import useForm from '../../hooks/useForm';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Login = ({ onLogin, userMessageError }) => {
  const { enteredValues, errors, handleChange, isValid } = useForm();
  const [isShown, setIsShown] = useState(true);
  const clickRegButton = () => setIsShown(!isShown);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!enteredValues.email || !enteredValues.password) {
      return;
    }
    onLogin(enteredValues);
    setIsShown(true);
  };
  return (
    <div className="login__container">
      <div className="login__header">
        <Link to="/">
          <img className="login__logo" alt="Логотип" src={logo} />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form className="login__form form" onSubmit={handleSubmit}>
        <label className="login__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="login__input"
          type="email"
          id="email"
          name="email"
          required
          value={enteredValues.email || ''}
          onChange={handleChange}
          placeholder="email"
        />
        <span className="login__error">{errors.email}</span>
        <label className="login__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="login__input"
          type="password"
          id="password"
          name="password"
          placeholder="••••••••••••••"
          required
          value={enteredValues.password || ''}
          onChange={handleChange}
        />
        <span className="login__error">{errors.password}</span>
        <span className="login__error">{userMessageError}</span>
        <button
          className="login__button"
          onClick={clickRegButton}
          type="submit"
          disabled={!isValid && isShown}
        >
          Войти
        </button>
      </form>
      <div className="login__register">
        <span>Ещё не зарегистрированы?</span>
        <Link to="/signup" className="login__link">
          Регистрация
        </Link>
      </div>
    </div>
  );
};

export default Login;

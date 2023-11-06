import React from 'react';
import './Login.css';
import useForm from '../../hooks/useForm';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  const { enteredValues, errors, handleChange } = useForm();
  return (
    <div className="login__container">
      <div className="login__header">
        <Link to="/">
          <img className="login__logo" alt="Логотип" src={logo} />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form className="login__form">
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
        <button className="login__button" type="submit">
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

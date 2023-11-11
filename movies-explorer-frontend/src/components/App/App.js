import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  authorizeUser,
  registerUser,
  updateUserInfo,
  getUserInfo,
  getSavedMovies,
  deleteSavedMovie,
  saveMovie,
} from '../../utils/MainApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [userMessageError, setUserMessageError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  /* Пользователь */

  const handleTokenCheck = useCallback(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    getUserInfo(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
        setUserMessageError('');
        navigate(path);
      })
      .catch((err) => console.log(err));
    getSavedMovies(jwt)
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  }, [location, navigate]);

  useEffect(() => {
    handleTokenCheck();
  }, [isLoggedIn]);

  /* Регистрация */
  const handleRegistration = async ({ name, email, password }) => {
    return registerUser({ name, email, password })
      .then(() => {
        handleAuthorization({ email, password });
      })
      .catch((error) => {
        console.log(error);
        setUserMessageError('Что-то пошло не так...');
        setTimeout(() => {
          setUserMessageError('');
        }, 2000);
      });
  };

  /* Авторизация */
  const handleAuthorization = async (data) => {
    return authorizeUser(data)
      .then((data) => {
        setIsLoggedIn(true);
        localStorage.setItem('jwt', data.token);
        navigate('/movies');
        Promise.all([getUserInfo(data.token), getSavedMovies(data.token)])
          .then(([userInfo, userMovies]) => {
            setCurrentUser(userInfo);
            localStorage.setItem('savedMovies', JSON.stringify(userMovies));
            setSavedMovies(userMovies);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setUserMessageError('Неправильные почта или пароль');
        setTimeout(() => {
          setUserMessageError('');
        }, 2000);
      });
  };

  /* Редактирование профиля */

  const handleUpdateUser = (newUserInfo) => {
    const jwt = localStorage.getItem('jwt');
    setIsLoading(true);
    updateUserInfo(newUserInfo, jwt)
      .then((data) => {
        setCurrentUser(data);
        setUserMessage('Профиль отредактирован успешно');
        setUserMessageError('');
        setTimeout(() => {
          setUserMessage('');
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setUserMessageError('Приобновлении профиля произошла ошибка');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /* Выход */
  const handleSignOut = () => {
    localStorage.clear();
    setCurrentUser({});
    setSavedMovies([]);
    setIsLoggedIn(false);
    navigate('/');
  };

  /* Проверка токена */

  // Сохранение и удаление фильмов
  const changeSaveMovie = (movie) => {
    const jwt = localStorage.getItem('jwt');

    const handledMovie = savedMovies.find((item) => {
      if (location.pathname === '/saved-movies') {
        return item.movieId === movie.movieId;
      } else {
        return item.movieId === movie.id;
      }
    });

    const isLiked = Boolean(handledMovie);

    const id = handledMovie ? handledMovie._id : movie._id;

    if (isLiked) {
      deleteSavedMovie(id, jwt)
        .then(() => {
          const updateSavedMovies = savedMovies.filter(
            (item) => item._id !== id
          );
          localStorage.setItem(
            'savedMovies',
            JSON.stringify(updateSavedMovies)
          );
          setSavedMovies(updateSavedMovies);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      saveMovie(movie, jwt)
        .then((newSavedMovie) => {
          setSavedMovies((prev) => [...prev, newSavedMovie]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Main loggedIn={isLoggedIn} />}
          ></Route>
          <Route
            exact
            path="/movies"
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <Movies
                  loggedIn={isLoggedIn}
                  isLoading={isLoading}
                  onLoading={setIsLoading}
                  savedMovies={savedMovies}
                  changeSave={changeSaveMovie}
                />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <SavedMovies
                  loggedIn={isLoggedIn}
                  isLoading={isLoading}
                  onLoading={setIsLoading}
                  savedMovies={savedMovies}
                  changeSave={changeSaveMovie}
                />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <Profile
                  loggedIn={isLoggedIn}
                  onSignOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                  userMessage={userMessage}
                  userMessageError={userMessageError}
                />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            exact
            path="/signup"
            element={
              <Register
                onRegister={handleRegistration}
                userMessageError={userMessageError}
              />
            }
          ></Route>
          <Route
            exact
            path="/signin"
            element={
              <Login
                onLogin={handleAuthorization}
                userMessageError={userMessageError}
              />
            }
          ></Route>
          <Route exact path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

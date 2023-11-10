import React, { useState, useEffect } from 'react';
import './MoviesCard.css';
import { convertMinToHours } from '../../utils/utils';
import useScreenWidth from '../../hooks/useScreenWidth';

const MoviesCard = ({ isSavedMoviesPage, movie, changeSave, saved }) => {
  const screenWidth = useScreenWidth();
  const [isMobile, setIsMobile] = useState(false);
  const changeSaveCard = () => {
    changeSave(movie);
  };

  useEffect(() => {
    if (screenWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenWidth]);

  return (
    <div className="card">
      <div className="card__description">
        <span className="card__name">{movie.nameRU}</span>
        <span className="card__duration">
          {convertMinToHours(movie.duration)}
        </span>
      </div>
      <a
        href={movie.trailerLink}
        className="card__link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="card__image"
          src={
            isSavedMoviesPage
              ? movie.image
              : `https://api.nomoreparties.co${movie.image.url}`
          }
          alt={`Фильм - ${movie.nameRU}`}
        />
      </a>
      {isSavedMoviesPage && (
        <button
          className="card__button card__button_delete"
          type="button"
          onClick={changeSaveCard}
        />
      )}

      {!isSavedMoviesPage && saved && isMobile && (
        <button
          className="card__button card__button_saved"
          type="button"
          onClick={changeSaveCard}
        />
      )}

      {!isSavedMoviesPage && saved && !isMobile && (
        <button
          className="card__button card__button_saved"
          type="button"
          onClick={changeSaveCard}
        />
      )}

      {!isSavedMoviesPage && !saved && (
        <button className="card__button" type="button" onClick={changeSaveCard}>
          Сохранить
        </button>
      )}
    </div>
  );
};

export default MoviesCard;

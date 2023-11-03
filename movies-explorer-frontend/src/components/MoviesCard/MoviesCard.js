import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ isSavedMoviesPage, movie }) => {
  return (
    <div className="card">
      <div className="card__description">
        <span className="card__name">{movie.name}</span>
        <span className="card__duration">{movie.duration}</span>
      </div>
      <img
        className="card__image"
        src={movie.image}
        alt={`Фильм - ${movie.name}`}
      />

      {isSavedMoviesPage && (
        <button className="card__button card__button_delete" />
      )}

      {!isSavedMoviesPage && movie.saved && (
        <button className="card__button card__button_saved" />
      )}

      {!isSavedMoviesPage && !movie.saved && (
        <button className="card__button">Сохранить</button>
      )}
    </div>
  );
};

export default MoviesCard;

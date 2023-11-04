import React from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ isLoading = false, isSavedMoviesPage, movies }) => {
  return (
    <section className="cards">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="cards__list">
          {movies.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                movie={movie}
                isSavedMoviesPage={isSavedMoviesPage}
              />
            );
          })}
        </div>
      )}
      <button
        className={
          !isSavedMoviesPage ? 'cards__button' : 'cards__button-hidden'
        }
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;

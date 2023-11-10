import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { checkSavedCard } from '../../utils/utils';
import useScreenWidth from '../../hooks/useScreenWidth';

import {
  TABLET_SCREEN_MOVIES_SUM,
  MIDDLE_SCREEN_MOVIES_SUM,
  MOBILE_SCREEN_MOVIES_SUM,
  MORE_MOVIES_TABLET_SCREEN_MOVIES_SUM,
  MORE_MOVIES_MOBILE_SCREEN_MOVIES_SUM,
  TABLET_SCREEN,
  MOBILE_SCREEN,
} from '../../utils/constants';

const MoviesCardList = ({
  isSavedMoviesPage,
  movies,
  changeSave,
  savedMovies,
  userMessage,
}) => {
  const [showMoviesList, setShowMoviesList] = useState(movies);
  const screenWidth = useScreenWidth();
  const searchedMoviesCount = movies ? movies.length : 0;

  const handleMoreClick = () => {
    if (screenWidth > TABLET_SCREEN) {
      setShowMoviesList(
        movies.slice(
          0,
          showMoviesList.length + MORE_MOVIES_TABLET_SCREEN_MOVIES_SUM
        )
      );
    } else {
      setShowMoviesList(
        movies.slice(
          0,
          showMoviesList.length + MORE_MOVIES_MOBILE_SCREEN_MOVIES_SUM
        )
      );
    }
  };
  useEffect(() => {
    if (screenWidth > TABLET_SCREEN) {
      setShowMoviesList(movies.slice(0, TABLET_SCREEN_MOVIES_SUM));
    } else if (screenWidth > MOBILE_SCREEN && screenWidth <= TABLET_SCREEN) {
      setShowMoviesList(movies.slice(0, MIDDLE_SCREEN_MOVIES_SUM));
    } else if (screenWidth <= MOBILE_SCREEN) {
      setShowMoviesList(movies.slice(0, MOBILE_SCREEN_MOVIES_SUM));
    } else {
      setShowMoviesList(movies);
    }
  }, [screenWidth, movies]);

  return (
    <section className="cards" aria-label="Фильмы">
      {userMessage ? <span>{userMessage}</span> : <span></span>}
      <div className="cards__list">
        {showMoviesList.sort().map((movie) => {
          return (
            <MoviesCard
              key={isSavedMoviesPage ? movie.movieId : movie.id}
              movie={movie}
              isSavedMoviesPage={isSavedMoviesPage}
              changeSave={changeSave}
              saved={checkSavedCard(savedMovies, movie)}
            />
          );
        })}
      </div>

      {!isSavedMoviesPage &&
        showMoviesList &&
        searchedMoviesCount !== showMoviesList.length && (
          <button className="cards__button" onClick={handleMoreClick}>
            Ещё
          </button>
        )}
    </section>
  );
};

export default MoviesCardList;

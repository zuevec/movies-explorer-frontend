import React, { useEffect } from 'react';
import './Search.css';
import Filter from '../Filter/Filter';
import useForm from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';

const Search = ({
  onSearchMovies,
  onFilter,
  isSavedMoviesPage,
  shortMovies,
}) => {

 
  
  const location = useLocation();
  const { enteredValues, handleChange, resetForm, isFormValid } = useForm();

  function handleFormSubmit(evt) {
    evt.preventDefault();
    onSearchMovies(enteredValues.searchRequest, isFormValid, shortMovies);
  }

  function handleSavedMoviesFormSubmit(evt) {
    evt.preventDefault();
    onSearchMovies(enteredValues.searchRequest, shortMovies, resetForm);
  }

  useEffect(() => {
    if (
      location.pathname === '/movies' &&
      localStorage.getItem('movieSearch')
    ) {
      const searchValue = localStorage.getItem('movieSearch');
      enteredValues.searchRequest = searchValue;
    }
  }, [location]);

  return (
    <section className="search" aria-label="Поиск">
      {isSavedMoviesPage ? (
        <>
          <form
            className="search__form form"
            name="search-saved-movie-form"
            onSubmit={handleSavedMoviesFormSubmit}
            noValidate
          >
            <input
              name="searchRequest"
              value={enteredValues.searchRequest || ''}
              onChange={handleChange}
              type="text"
              placeholder="Фильм"
              className="search__input"
              required
            />
            <button className="search__button" type="submit">
              Найти
            </button>
          </form>
          <Filter isMovieFilter={shortMovies} onFilter={onFilter} />
          <div className="search__line"></div>
        </>
      ) : (
        <>
          <form
            className="search__form form"
            name="search-movie-form"
            onSubmit={handleFormSubmit}
            noValidate
          >
            <input
              name="searchRequest"
              value={enteredValues.searchRequest || ''}
              onChange={handleChange}
              type="text"
              placeholder="Фильм"
              className="search__input"
              required
            />
            <button className="search__button" type="submit">
              Найти
            </button>
          </form>
          <Filter isMovieFilter={shortMovies} onFilter={onFilter} />
          <div className="search__line"></div>
        </>
      )}
    </section>
  );
};

export default Search;

import React from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../Search/Search';
import Footer from '../Footer/Footer';

const savedMovies = [
  {
    id: 1,
    name: 'В погоне за Бенкси',
    image: 'images/films/1film.jpg',
    duration: '0ч 42м',
    saved: true,
  },
  {
    id: 2,
    name: 'Киноальманах «100 лет дизайна»',
    image: 'images/films/2film.png',
    duration: '0ч 42м',
    saved: true,
  },
  {
    id: 3,
    name: 'В погоне за Бенкси',
    image: 'images/films/3film.png',
    duration: '0ч 42м',
    saved: true,
  },
];

const SavedMovies = ({ loggedIn }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm />
        <MoviesCardList isSavedMoviesPage={true} movies={savedMovies} />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;

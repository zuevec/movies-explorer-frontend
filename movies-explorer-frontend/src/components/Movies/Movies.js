import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const movies = [
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

  {
    id: 4,
    name: 'В погоне за Бенкси',
    image: 'images/films/2film.png',
    duration: '0ч 42м',
    saved: false,
  },
  {
    id: 5,
    name: 'В погоне за Бенкси',
    image: 'images/films/1film.jpg',
    duration: '0ч 42м',
    saved: false,
  },
  {
    id: 6,
    name: 'В погоне за Бенкси',
    image: 'images/films/3film.png',
    duration: '0ч 42м',
    saved: false,
  },
];

const Movies = ({ loggedIn }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <Search />
        <MoviesCardList isSavedMoviesPage={false} movies={movies} />
      </main>
      <Footer />
    </>
  );
};

export default Movies;

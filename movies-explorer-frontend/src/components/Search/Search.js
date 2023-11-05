import React from 'react';
import './Search.css';
import Filter from '../Filter/Filter';

const Search = () => {
  return (
    <section className="search" aria-label="Поиск">
      <form className="search__form">
        <input type="text" placeholder="Фильм" className="search__input" />
        <button className="search__button">Поиск</button>
      </form>
      <Filter />
      <div className="search__line"></div>
    </section>
  );
};

export default Search;

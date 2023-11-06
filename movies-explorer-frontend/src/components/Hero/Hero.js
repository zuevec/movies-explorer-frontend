import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import MoreButton from '../MoreButton/MoreButton';

const Hero = ({ loggedIn }) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="hero__caption">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <MoreButton />
      </div>
    </section>
  );
};

export default Hero;

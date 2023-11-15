import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Tech from '../Tech/Tech';
import Student from '../Student/Student';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const Main = ({ loggedIn }) => {
  return (
    <div className="hero">
      <Header loggedIn={loggedIn} />
      <main>
        <Hero loggedIn={loggedIn} />
        <About />
        <Tech />
        <Student />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Main;

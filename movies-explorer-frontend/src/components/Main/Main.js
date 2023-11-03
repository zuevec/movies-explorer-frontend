import Hero from '../Hero/Hero';
import About from '../About/About';
import Tech from '../Tech/Tech';
import Student from '../Student/Student';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
const Main = ({ loggedIn }) => {
  return (
    <>
      <Hero loggedIn={loggedIn} />
      <About />
      <Tech />
      <Student />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Main;

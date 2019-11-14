import React, { Fragment } from 'react';
import Landing from './Landing';
import Overlay from './Overlay';
import Services from './Services';
import Feature from './Feature';
import About from './About';
import News from './News';

const Home = () => {
  return (
    <Fragment>
      <div className="hero-content">
        <Landing />
        <Overlay />
      </div>
      <Services />
      <Feature />
      <About />
      <News />
    </Fragment>
  );
};

export default Home;

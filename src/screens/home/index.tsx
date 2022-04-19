import React from 'react';
import { RootCSS } from './styles';
import {
  Intro,
  Features,
  Projects,
  Nav,
  Footer
} from './components';

const Home = () => {
  return (
    <RootCSS>
      <Nav />
      <Intro />
      <div className="container-one">
        <div className="container-one--one" />
        <div className="container-one--two" />
        <div className="container-one--three" />
        <div className="container-one--four" />
      </div>
      <Features />
      <div className="container-two">
        <div className="container-two--one" />
        <div className="container-two--two" />
        <div className="container-two--three" />
        <div className="container-two--four" />
      </div>
      <Projects />
      <div className="container-three">
        <div className="container-three--one" />
        <div className="container-three--two" />
        <div className="container-three--three" />
        {/* <div className="container-two--four" /> */}
      </div>
      <Footer />
    </RootCSS>
  )
}

export default Home;

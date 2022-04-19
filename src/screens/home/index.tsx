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
        <div className="block-one" />
        <div className="block-two" />
        <div className="block-three" />
        <div className="block-four" />
      </div>
      <Features />

      <Projects />
      <Footer />
    </RootCSS>
  )
}

export default Home;

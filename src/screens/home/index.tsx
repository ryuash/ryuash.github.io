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
      <Features />
      <Projects />
      <Footer />
    </RootCSS>
  )
}

export default Home;

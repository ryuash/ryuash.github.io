import React from 'react';
import { RootCSS } from './styles';
import {
  Intro,
  Features,
  Projects,
  Nav
} from './components';

const Home = () => {
  return (
    <RootCSS>
      <Nav />
      <Intro />
      <Features />
      <Projects />
    </RootCSS>
  )
}

export default Home;

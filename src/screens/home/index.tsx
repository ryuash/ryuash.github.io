import React from 'react';
import { RootCSS } from './styles';
import {
  Intro,
  Feature,
  Projects,
  Nav
} from './components';

const Home = () => {
  return (
    <RootCSS>
      <Nav />
      <Intro />
      <Feature />
      <Projects />
    </RootCSS>
  )
}

export default Home;

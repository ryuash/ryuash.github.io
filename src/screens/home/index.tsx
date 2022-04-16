import React from 'react';
import { RootCSS } from './styles';
import {
  Intro,
  Feature,
  Projects
} from './components';

const Home = () => {
  return (
    <RootCSS>
      <Intro />
      <Feature />
      <Projects />
    </RootCSS>
  )
}

export default Home;

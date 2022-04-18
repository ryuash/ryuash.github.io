import React from 'react';
import { RootCSS } from './styles';
import { Feature } from './components';
import { projects } from './utils';

const Features = () => {
  return (
    <RootCSS>
      {projects.map((x) => {
        return (
          <Feature key={x.title} />
        )
      })}
    </RootCSS>
  )
}

export default Features;

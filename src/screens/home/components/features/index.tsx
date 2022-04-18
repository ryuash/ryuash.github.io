import React from 'react';
import { RootCSS } from './styles';
import { SingleFeature } from './components';
import { projects } from './utils';

const Features = () => {
  return (
    <RootCSS>
      {projects.map((x) => {
        return (
          <SingleFeature key={x.title} />
        )
      })}
    </RootCSS>
  )
}

export default Features;

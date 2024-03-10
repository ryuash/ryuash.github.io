import React from 'react';
import { Project, FeatureProject } from '@src/components';
import { RootCSS } from './styles';
import { projects } from './utils';

const Features = () => {
  return (
    <RootCSS id="projects">
      {projects.map((x, i) => {
        return (
          <React.Fragment key={x.title}>
            <Project project={x} className="project project-sm" />
            <FeatureProject project={x} index={i} className="project project-lg" />
          </React.Fragment>
        )
      })}
    </RootCSS>
  )
}

export default Features;

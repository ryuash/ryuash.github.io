import React from 'react';
import { useScreenSize } from '@src/hooks';
import { Project } from '@src/components';
import { RootCSS } from './styles';
import { projects } from './utils';

const Projects = () => {
  const { isMobile } = useScreenSize();
  if (isMobile) {
    return null;
  }
  return (
    <RootCSS>
      {projects.map((x, i) => {
        return (
          <React.Fragment key={x.title}>
            <Project project={x} className="project" />
          </React.Fragment>
        )
      })}
    </RootCSS>
  )
}

export default Projects;

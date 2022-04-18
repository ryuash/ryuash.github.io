import React from 'react';
import { useScreenSize } from '@src/hooks';
import { Project, FeatureProject } from '@src/components';
import { RootCSS } from './styles';
import { projects } from './utils';

const Features = () => {
  const { isMobile } = useScreenSize();
  return (
    <RootCSS>
      {projects.map((x, i) => {
        let component = null;
        if (isMobile) {
          component = <Project project={x} className="project" />;
        } else {
          component = <FeatureProject project={x} index={i} className="project" />;
        }

        return (
          <React.Fragment key={x.title}>
            {component}
          </React.Fragment>
        )
      })}
    </RootCSS>
  )
}

export default Features;

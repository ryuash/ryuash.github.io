import React from 'react';
import { useScreenSize } from '@src/hooks';
import { Project, FeatureProject } from '@src/components';
import { RootCSS } from './styles';
import { projects } from './utils';

const Features = () => {
  const { isMobile } = useScreenSize();
  return (
    <RootCSS>
      {projects.map((x) => {
        let component = null;
        if (isMobile) {
          component = <Project project={x} />;
        } else {
          component = <FeatureProject project={x} />;
        }

        return (
          <React.Component key={x.title}>
            {component}
          </React.Component>
        )
      })}
    </RootCSS>
  )
}

export default Features;

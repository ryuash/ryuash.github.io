import React from 'react';
import { useScreenSize } from '@src/hooks';
import { Project } from '@src/components';

const Feature: React.FC<{project: ProjectType} & ComponentDefault> = (props) => {
  const { isMobile } = useScreenSize();
  if (isMobile) {
    return (
      <Project project={props.project} />
    )
  }

  return (
    <div>
      table desktop
    </div>
  )
}

export default Feature;

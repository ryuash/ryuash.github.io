import React from 'react';
import { RootCSS } from './styles';

const FeatureProject: React.FC<{project: ProjectType, index: number} & ComponentDefault> = (props) => {
  return (
    <RootCSS cover={props.project.cover} index={props.index}>
      <div className="cover" />
      <div className="body">
        <div>title</div>
        <div>description</div>
        <div>stack</div>
        <div>links</div>
      </div>
    </RootCSS>
  )
}

export default FeatureProject;

import React from 'react';
import classnames from 'classnames';
import { RootCSS } from './styles';
import { renderIconByType } from '@src/utils'

const FeatureProject: React.FC<{project: ProjectType, index: number} & ComponentDefault> = (props) => {
  const stack = props.project.stack.join(' - ');
  return (
    <RootCSS
      cover={props.project.cover.url}
      index={props.index}
      className={props.className}
    >
      <div className={classnames('cover', props.project.cover.className)} />
      <div className="body">
        <h3 className="body--title">{props.project.title}</h3>
        <p className="body--description">{props.project.description}</p>
        <p className="body--stack">{stack}</p>
        <div className="body--links">
          {props.project.links.map((link) => {
            const { url, type, description = type } = link;
            return (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                title={description}
              >
                {renderIconByType(type)}
              </a>
            );
          })}
        </div>
      </div>
    </RootCSS>
  )
}

export default FeatureProject;

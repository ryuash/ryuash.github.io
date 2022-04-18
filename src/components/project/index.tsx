import React from 'react';
import { RootCSS } from './styles';
import { renderIconByType } from '@src/utils'

const Project: React.FC<{project: ProjectType} & ComponentDefault> = (props) => {
  const stack = props.project.stack.join(' - ');
  return (
    <RootCSS className={props.className} cover={props.project.cover}>
      <div className="cover" />
      <div className="body--wrapper">
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

export default Project;

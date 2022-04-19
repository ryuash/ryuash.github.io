import React from 'react';
import classnames from 'classnames';
import { RootCSS } from './styles';

const Box: React.FC<{
  id?: string;
  free?: boolean;
  children: React.ReactNode
} & ComponentDefault> = (props) => {
  return (
    <RootCSS id={props.id}>
      <div className={classnames(props.className,'box--wrapper', {
        'box--wrapper--limit': !props.free
      })}>
        {props.children}
      </div>
    </RootCSS>
  )
}

export default Box;

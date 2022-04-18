import React from 'react';
import classnames from 'classnames';
import { RootCSS } from './styles';

const Box: React.FC<{children: React.ReactNode} & ComponentDefault> = (props) => {
  return (
    <RootCSS>
      <div className={classnames(props.className, 'box--wrapper')}>
        {props.children}
      </div>
    </RootCSS>
  )
}

export default Box;

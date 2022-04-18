import React from 'react';
import { RootCSS } from './styles';

const Box: React.FC<{children: React.ReactNode} & ComponentDefault> = (props) => {
  return (
    <RootCSS className={props.className}>
      {props.children}
    </RootCSS>
  )
}

export default Box;

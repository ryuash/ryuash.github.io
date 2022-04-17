import React from 'react';
import { RootCSS } from './styles';

const Box: React.FC<{children: React.ReactNode} & ComponentDefault> = (props) => {
  return (
    <RootCSS>
      {props.children}
    </RootCSS>
  )
}

export default Box;

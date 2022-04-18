import React from 'react';
import { useScreenSize } from '@src/hooks';

const Feature: React.FC<ComponentDefault> = (props) => {
  const { isMobile } = useScreenSize();
  if (isMobile) {
    return (
      <div>Mobile</div>
    )
  }

  return (
    <div>
      table desktop
    </div>
  )
}

export default Feature;

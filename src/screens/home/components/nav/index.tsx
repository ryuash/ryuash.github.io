import React from 'react';
import dynamic from 'next/dynamic';
import { useScreenSize } from '@src/hooks';
import { RootCSS } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Nav = () => {
  const { isMobile } = useScreenSize();
  return (
    <RootCSS>
    {isMobile ? (
      <Mobile />
    ) : (
      <Desktop />
    )}
    </RootCSS>
  )
}

export default Nav;

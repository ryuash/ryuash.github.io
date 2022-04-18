import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RootCSS, NavIconCSS } from './styles';
import { useMobile } from './hooks';

const Mobile = () => {
  const {
    isOpen,
    toggle,
  } = useMobile();
  return (
    <RootCSS>
      <div className="nav--block">
         <NavIconCSS
          onClick={toggle}
          isOpen={isOpen}
         >
          <div />
        </NavIconCSS>
        <AnchorLink href='#home'>
          <h4>Ryuash</h4>
        </AnchorLink>
      </div>
      <div>content</div>
      <div>overlay</div>
    </RootCSS>
  )
}

export default Mobile;

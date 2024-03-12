import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { RootCSS, NavIconCSS } from './styles';
import { useMobile } from './hooks';
import { navItems } from '../../utils';

const Mobile = () => {
  const {
    isOpen,
    toggle,
    toggleOff,
  } = useMobile();
  return (
    <RootCSS isOpen={isOpen}>
      <div className="nav--block">
         <NavIconCSS
          onClick={toggle}
          isOpen={isOpen}
         >
          <div />
        </NavIconCSS>
        <AnchorLink
          href='#about'
          offset='50'
        >
          <h2 className="nav--title" onClick={toggleOff}>Ryuash</h2>
        </AnchorLink>
      </div>
      <div className="menu">
      {navItems.map((x) => (
        <AnchorLink
          href={x.to}
          offset='50'
          key={x.to}
          className="menu--item"
          onClick={toggleOff}
        >
          <p>
            {x.display}
          </p>
        </AnchorLink>
      ))}
      </div>
      <div className="menu--overlay" onClick={toggleOff} />
      <div className="nav--placeholder" />
    </RootCSS>
  )
}

export default Mobile;

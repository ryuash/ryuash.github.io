import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { navItems } from '../../utils';
import { RootCSS } from './styles';

const Desktop = () => {
  return (
    <RootCSS>
      <div className="nav">
        <p className="nav--title">Ryuash</p>
        <div className="menu">
          {navItems.map((x) => (
            <AnchorLink href={x.to} offset='60' key={x.to} className="menu--item">
              {x.display}
            </AnchorLink>
          ))}
        </div>
      </div>
      <div className="nav--placeholder" />
    </RootCSS>
  )
}

export default Desktop;

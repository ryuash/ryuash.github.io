import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { navItems } from '../../utils';
import { RootCSS } from './styles';

const Desktop = () => {
  return (
    <RootCSS>
      <div className="nav">
        <AnchorLink
          href='#about'
          offset='60'
        >
          <h2 className="nav--title">Ryuash</h2>
        </AnchorLink>
        <div className="menu">
          {navItems.map((x) => (
            <AnchorLink href={x.to} offset='60' key={x.to} className="menu--item">
              <p>
                {x.display}
              </p>
            </AnchorLink>
          ))}
        </div>
      </div>
      <div className="nav--placeholder" />
    </RootCSS>
  )
}

export default Desktop;

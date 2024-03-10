import React from 'react';
import { RootCSS } from './styles';
import { contactLinks } from '../../utils';

const Footer = () => {
  return (
    <RootCSS free>
      <p className="footer--content">
        Whoa, you&apos;re still here? Hope I&apos;m doing something right then
      </p>
      <p className="footer-links">
        {contactLinks.map((x, i) => {
          const isLast = i < contactLinks.length - 1;
          return (
            <React.Fragment key={x.url}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={x.url}
            >
              {x.display}
            </a>
            {!!isLast && (
              " | "
            )}
            </React.Fragment>
          )
        })}
      </p>
    </RootCSS>
  )
}

export default Footer;

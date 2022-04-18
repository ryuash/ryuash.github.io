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
            <>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              key={x.url}
              href={x.url}
            >
              {x.display}
            </a>
            {!!isLast && (
              " | "
            )}
            </>
          )
        })}
      </p>
    </RootCSS>
  )
}

export default Footer;

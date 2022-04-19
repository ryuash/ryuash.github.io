import React from 'react';
import { RootCSS } from './styles';
import { contactLinks } from '../../utils';

function Intro() {
  return (
    <RootCSS id="about">
      <h1 className="title">
          [ Hello? ]
        </h1>
      <div className="profile">
        <div className="profile--block">
          <img
            className="profile--image"
            src="/images/profile.jpeg"
            alt="profile photo"
          />
        </div>
        <div className="profile--decoration profile--decoration--leftFive" />
        <div className="profile--decoration profile--decoration--rightOne" />
        <div className="profile--decoration profile--decoration--rightTwo" />
        <div className="profile--decoration profile--decoration--leftOne" />
        <div className="profile--decoration profile--decoration--leftTwo" />
        <div className="profile--decoration profile--decoration--leftThree" />
        <div className="profile--decoration profile--decoration--leftFour" />
      </div>
      <div className="description">
        <p className="description--block">
          I’m Wingman, a Software Engineer based between New York/ Hong Kong
        </p>
        <p className="description--block">
          Currently on the engineering team at Forbole where I lead the development and maintenance of{' '}
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://bigdipper.live"
          >
            Big Dipper
          </a>
          , an open source blockchain explorer
        </p>
        <p className="description--block description--block--links">
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
      </div>
    </RootCSS>
  );
}

export default Intro;

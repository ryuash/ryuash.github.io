import React from 'react';
import { RootCSS } from './styles';
import { contactLinks } from './utils';

function Intro() {
  return (
    <RootCSS>
      <div className="profile">
        <div>
          Hello image maybe
        </div>
        <div className="profile--block">
          <img
            className="profile--image"
            src="/images/profile.jpeg"
            alt="profile photo"
          />
        </div>
        <div className="profile--decoration profile--decoration--rightOne" />
        <div className="profile--decoration profile--decoration--rightTwo" />
        <div className="profile--decoration profile--decoration--leftOne" />
        <div className="profile--decoration profile--decoration--leftTwo" />
      </div>
      <div className="description">
        <p className="description--block">
          I’m Wingman, a Software Engineer currently based in New York/ Hong Kong. I design and develop high quality applications with the user experience code quality as a top priority.
        </p>
        <p className="description--block">
          Currently on the engineering team at Forbole where I lead the development and maintenance of <a href="https://bigdipper.live">Big Dipper</a>, an open source blockchain explorer
        </p>
        <p className="description--block description--block--links">
          {contactLinks.map((x, i) => {
            const isLast = i < contactLinks.length - 1;
            return (
              <>
              <a key={x.url} href={x.url}>{x.display}</a>
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

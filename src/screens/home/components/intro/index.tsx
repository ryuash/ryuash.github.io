import React from 'react';
import { RootCSS } from './styles';

function Intro() {
  return (
    <RootCSS>
      <div className="profile">
        <img
          className="profile--image"
          src="/images/profile.jpeg"
          alt="profile photo"
        />
      </div>
      <div className="description">
        <p className="description--block">
          I’m Wingman, a Software Engineer currently based in Hong Kong/ New York. I design and develop high quality web applications with the user experience as a priority as well as efficient and modern backends.
        </p>
        <p className="description--block">
          Currently on the engineering team at Forbole where I lead the development and maintenance of Big Dipper, an open source blockchain explorer
        </p>
      </div>
    </RootCSS>
  );
}

export default Intro;

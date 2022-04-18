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
      <div className="description">Description</div>
    </RootCSS>
  );
}

export default Intro;

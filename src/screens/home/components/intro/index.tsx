import React from 'react';
import { RootCSS } from './styles';
import { contactLinks } from '../../utils';

function Intro() {
  const skills = [
    {
      label: 'Vue',
      src: '/icons/vue.png'
    },
    {
      label: 'React',
      src: '/icons/react.png'
    },
    {
      label: 'Nextjs',
      src: '/icons/nextjs.svg'
    },
    {
      label: 'D3',
      src: '/icons/d3.svg'
    },
    {
      className: 'astro',
      label: 'Astrojs',
      src: '/icons/astrojs.svg'
    },
    {
      label: 'Graphql',
      src: '/icons/graphql.png'
    },
    {
      label: 'dart',
      src: '/icons/dart.svg'
    },
    {
      label: 'Typescript',
      src: '/icons/typescript.png'
    },
    {
      label: 'Javascript',
      src: '/icons/javascript.png'
    },
    {
      label: 'HTML',
      src: '/icons/html.svg'
    },
    {
      label: 'CSS',
      src: '/icons/css.svg'
    },
    {
      label: 'SQL',
      src: '/icons/sql.svg'
    },
    {
      label: 'mongo',
      src: '/icons/mongo.svg'
    },
  ]
  return (
    <RootCSS id="about">
      <h1 className="title">
      Howdy
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
          I’m Wingman, a Software Engineer by day and menace by night
        </p>
        <p className="description--block">
          My main interests are <b>frontend development</b>, <b>pipelines</b>, <b>scalability</b>, and the occassional <b>bash integration scripts</b>. While backend does not peak my interest as much, I am capable always down to learn new things and help out wherever needed.
        </p>
        <p className="description--block">
        I love working on animations, data charts and tweaking around component libraries
        </p>
        <p className="description--block description--block--links">
          {contactLinks.map((x, i) => {
            const isLast = i < contactLinks.length - 1;
            return (
              <React.Fragment key={`${x.url}-${i}`}>
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
      </div>
      <div className="skills">
        {skills.map((x) => (
          <img className={`skills--image ${x.className ? `skills--image-${x.className}` : ''}`} src={x.src} key={x.label} alt={x.label} />
        ))}
      </div>
    </RootCSS>
  );
}

export default Intro;

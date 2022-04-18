import { css } from 'styled-components';

const media = {
  xs: 320,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1440,
}

const mixins = {
  hoverTransition: css`
    transition: 0.3s;
    &:hover {
      cursor: pointer;
    }
  `,
  transition: css`
    transition: 0.3s;
  `,
  dropShadow: css`
    -webkit-box-shadow: 13px 14px 14px -10px rgba(56,56,56,0.4);
    -moz-box-shadow: 13px 14px 14px -10px rgba(56,56,56,0.4);
    box-shadow: 13px 14px 14px -10px rgba(56,56,56,0.4);
  `,
  noDropShadow: css`
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  `,
};

export const theme = {
  colors: {
    primary: '#0a5c59',
    secondary: '#faf3de',
    divider: '#e8e8e8',
  },
  background: {
    surfaceOne: '#ffffff'
  },
  fonts: {
    fontOne: '#000000',
    fontTwo: '#414141',
    fontThree: '#777777',
    fontFour: '#999999'
  },
  media: {
    ...media,
    maxWidth: '1024px',
    generateMedia: (device: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
      const mediaSize = media[device] || media.xs;
      return `(min-width: ${mediaSize}px)`;
    }
  },
  mixins,
}

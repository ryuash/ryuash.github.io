import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from '@src/styles/theme';

export const GlobalCSS = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Hind Madurai';
    src: url("/fonts/HindMadurai-Regular.ttf");
    font-weight: 400;
  }

  @font-face {
    font-family: 'Hind Madurai';
    src: url("/fonts/HindMadurai-Medium.ttf");
    font-weight: 500;
  }

  @font-face {
    font-family: 'Lobster';
    src: url("/fonts/Lobster-Regular.ttf");
    font-weight: 400;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

  body {
    font-family: "Hind Madurai", sans-serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: "Hind Madurai", sans-serif;
    font-weight: 400;
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    letter-spacing: 0.25px;
  }

  h2 {
    font-size: 1.5rem;
    letter-spacing: 0px;
  }

  h3 {
    font-size: 1.25rem;
    letter-spacing: 0.15px;
  }

  h4 {
    font-size: 1rem;
    letter-spacing: 0.15px;
  }

  h5 {
    font-size: 0.875rem;
    letter-spacing: 0.1px;
    font-weight: 500;
  }

  h6 {
    font-size: 0.75rem;
    letter-spacing: 0.1px;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    white-space: pre-wrap;
    margin: 0px;
    line-height: 1.25;
    color: ${theme.fonts.fontThree};
  }

  caption {
    font-size: 0.75rem;
    letter-spacing: 0.4px;
  }

  a {
    color: #0a5c59;
    text-decoration: none;
  }

  svg {
    ${theme.mixins.hoverTransition}
    width: 25px;
    margin: 0;
    fill: ${theme.fonts.fontFour};
    &:hover {
      fill: ${theme.colors.primary};
    }
  }
`;

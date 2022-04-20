import styled from 'styled-components';
import { Box } from '@src/components';

export const RootCSS = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .profile {
    position: relative;
  }

  .title {
    font-family: "Lobster", sans-serif;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
  }

  .profile--decoration {
    position: absolute;
    background: ${props => props.theme.colors.primary};
  }

  .profile--decoration--rightOne {
    height: 20px;
    width: 100px;
    top: 20%;
    right: -25%;
    background: ${props => props.theme.colors.primaryTwo};
  }

  .profile--decoration--rightTwo {
    height: 3px;
    width: 100px;
    top: 35%;
    right: -13%;
    background: ${props => props.theme.colors.primaryThree};
  }

  .profile--decoration--leftOne {
    height: 15px;
    width: 100px;
    bottom: 14%;
    left: -10%;
    background: ${props => props.theme.colors.secondary};
  }

  .profile--decoration--leftTwo {
    height: 4px;
    width: 140%;
    bottom: 22%;
    left: -25%;
    border-radius: 2px;
  }

  .profile--decoration--leftThree {
    height: 10px;
    width: 20%;
    bottom: 22%;
    left: -25%;
    border-radius: 2px;
  }

  .profile--decoration--leftFour {
    height: 10px;
    width: 20%;
    bottom: 22%;
    left: 10px;
    position: relative;
    border-radius: 2px;
  }

  .profile--decoration--leftFive {
    height: 18px;
    width: 40%;
    top: -3px;
    left: -15%;
    position: absolute;
    border-radius: 2px;
    z-index: 1;
  }

  .profile--block {
    height: 175px;
    width: 175px;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    border: solid 5px ${props => props.theme.background.surfaceOne};
  }

  .profile--image {
    position: absolute;
    width: 150%;
    height: auto;
    top: 0;
    left: -30%;
  }

  .description {
    margin-top: 1rem;
    width: 100%;
  }

  .description--block {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .description--block--links {
    margin-top: 1.5rem;
  }

  @media ${props => props.theme.media.generateMedia('md')} {
    .title {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    .profile--block {
      height: 200px;
      width: 200px;
    }
  }

  @media ${props => props.theme.media.generateMedia('lg')} {
    .profile--block {
      height: 250px;
      width: 250px;
    }

    .description {
      margin-top: 2rem;
      max-width: 600px;
    }
  }
`;

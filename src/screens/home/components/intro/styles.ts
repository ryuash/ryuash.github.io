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

  .profile--decoration {
    position: absolute;
    background: ${props => props.theme.colors.primary};
  }

  .profile--decoration--rightOne {
    height: 5px;
    width: 100px;
    top: 20%;
    right: -25%;
  }

  .profile--decoration--rightTwo {
    height: 3px;
    width: 100px;
    top: 27%;
    right: -13%;
  }

  .profile--decoration--leftOne {
    height: 7px;
    width: 100px;
    bottom: 14%;
    left: -10%;
  }

  .profile--decoration--leftTwo {
    height: 4px;
    width: 140%;
    bottom: 22%;
    left: -25%;
    border-radius: 2px;
  }

  .profile--block {
    height: 175px;
    width: 175px;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    z-index: 1;
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
    }
  }
`;

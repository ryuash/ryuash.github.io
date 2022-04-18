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
    top: 30px;
    left: 90px;
  }

  .profile--decoration--rightTwo {
    height: 3px;
    width: 100px;
    top: 40px;
    left: 70px;
  }

  .profile--decoration--leftOne {
    height: 3px;
    width: 100px;
    bottom: 20px;
    right: 70px;
  }

  .profile--decoration--leftTwo {
    height: 4px;
    width: 200px;
    bottom: 30px;
    left: -35px;
    border-radius: 2px;
  }

  .profile--block {
    height: 150px;
    width: 150px;
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
`;

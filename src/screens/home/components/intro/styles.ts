import styled from 'styled-components';
import { Box } from '@src/components';

export const RootCSS = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .profile {
    height: 150px;
    width: 150px;
    border-radius: 3px;
    background: lime;
    overflow: hidden;
    position: relative;
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
`;

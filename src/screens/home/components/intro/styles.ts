import styled from 'styled-components';
import { Box } from '@src/components';

export const RootCSS = styled(Box)`
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .profile {
    height: 150px;
    width: 150px;
    border-radius: 3%;
    background: lime;
    overflow: hidden;
  }

  .description {
    margin-top: 1rem;
    background: blue;
    width: 100%;
  }
`;

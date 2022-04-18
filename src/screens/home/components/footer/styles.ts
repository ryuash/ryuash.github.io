import styled from 'styled-components';
import { Box } from '@src/components';

export const RootCSS = styled(Box)`
  background: ${props => props.theme.background.dark};
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .footer--content {
    text-align: center;
  }

  .footer-links {
    margin-top: 1rem;
  }
`;

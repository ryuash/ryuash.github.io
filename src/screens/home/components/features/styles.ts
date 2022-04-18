import styled from 'styled-components';
import { Box } from '@src/components';

export const RootCSS = styled(Box)`
  .project:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media ${props => props.theme.media.generateMedia('md')} {
    .project:not(:last-child) {
      margin-bottom: 8rem;
    }
  }
`;

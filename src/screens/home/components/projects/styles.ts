import styled from 'styled-components';
import { Box } from '@src/components';

export const RootCSS = styled(Box)`
  .project:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media ${props => props.theme.media.generateMedia('lg')} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;

    .project:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

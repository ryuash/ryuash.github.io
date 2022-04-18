import styled from 'styled-components';

export const RootCSS = styled.div`
  .box--wrapper {
    padding: 2.5rem 2rem;
  }

  @media ${props => props.theme.media.generateMedia('md')} {
    .box--wrapper {
      padding: 4rem 2rem;
    }
  }

  @media ${props => props.theme.media.generateMedia('lg')} {
    .box--wrapper--limit {
      max-width: ${props => props.theme.media.maxWidth};
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

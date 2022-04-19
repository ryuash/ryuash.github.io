import styled from 'styled-components';

export const RootCSS = styled.div`
  background: ${props => props.theme.background.surfaceOne};

  .container-one {
    position: relative;
  }

  .block-one {
    height: 50px;
    background: ${props => props.theme.colors.primary};
  }

  .block-two {
    position: relative;
    height: 50px;
    width: 30%;
    background: ${props => props.theme.background.surfaceOne};
    top: -20px;
  }

  .block-three {
    background: ${props => props.theme.colors.primary};
    width: 25%;
    height: 20px;
    position: relative;
    top: -40px;
  }

  .block-four {
    background: ${props => props.theme.colors.primary};
    width: 25%;
    height: 20px;
    position: absolute;
    top: -20px;
    right: 0;
  }
`;

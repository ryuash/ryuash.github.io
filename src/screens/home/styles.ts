import styled from 'styled-components';

export const RootCSS = styled.div`
  background: ${props => props.theme.background.surfaceOne};

  .container-one, .container-two, .container-three {
    position: relative;
  }

  .container-one--one {
    height: 50px;
    background: ${props => props.theme.colors.primary};
  }

  .container-one--two {
    position: relative;
    height: 50px;
    width: 30%;
    background: ${props => props.theme.background.surfaceOne};
    top: -20px;
  }

  .container-one--three {
    background: ${props => props.theme.colors.primary};
    width: 25%;
    height: 20px;
    position: relative;
    top: -40px;
  }

  .container-one--four {
    background: ${props => props.theme.colors.primary};
    width: 25%;
    height: 20px;
    position: absolute;
    top: -20px;
    right: 0;
  }

  .container-two--one {
    height: 50px;
    width: 80%;
    background: ${props => props.theme.colors.primary};
  }

  .container-two--two {
    height: 10px;
    width: 30%;
    background: ${props => props.theme.background.surfaceOne};
    position: absolute;
    right: 0;
    top: 0;
  }

  .container-two--three {
    height: 10px;
    width: 10%;
    background: ${props => props.theme.colors.primary};
    position: absolute;
    right: 40%;
    top: -20px;
  }

  .container-two--four {
    height: 50px;
    width: 10%;
    background: ${props => props.theme.colors.primary};
    position: absolute;
    right: 0;
    top: 0;
  }

  .container-three--one {
    height: 15px;
    width: 40%;
    background: ${props => props.theme.colors.primary};
    position: relative;
    top: 5px;
    left: 10%;
  }

  .container-three--two {
    height: 20px;
    width: 5%;
    background: ${props => props.theme.colors.primary};
    position: relative;
    top: 0;
    left: 0;
  }

  .container-three--three {
    height: 30px;
    width: 80%;
    background: ${props => props.theme.colors.primary};
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

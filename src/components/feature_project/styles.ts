import styled from 'styled-components';

export const RootCSS = styled.div`
  width: 100%;

  .cover {
    width: 70%;
    height: 250px;
    margin-right: ${(props) => !!props.index ? 'auto' : '0'};
    margin-left: ${(props) => !!props.index ? '0' : 'auto'};
    overflow: hidden;
    border-radius: 3px;
  }

  .cover--image {
    ${props => props.theme.mixins.transition}
    filter: ${props => props.hover ? 'none' : 'grayscale(100%)'};
    transform: ${props => props.hover ? 'scale(1.1)' : 'scale(1)'};
    object-fit: cover;
    width: 100%;
    height: auto;
  }

  .body {
    ${props => props.theme.mixins.dropShadow}
    background: ${props => props.theme.background.surfaceOne};
    padding: 2rem;
    min-height: 250px;
    border-radius: 5px;
    position: relative;
    width: 70%;
    margin-top: -5%;
    margin-right: ${(props) => !!props.index ? '0' : 'auto'};
    margin-left: ${(props) => !!props.index ? 'auto' : '0'};
    border: solid 1px ${props => props.theme.colors.divider};
  }

  .body--title {
    color: ${props => props.theme.fonts.fontTwo}
  }

  .body--description {
    margin-top: 0.5rem;
  }

  .body--stack {
    margin-top: 1rem;
  }

  .body--links {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    a:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

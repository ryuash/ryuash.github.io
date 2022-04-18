import styled from 'styled-components';

export const RootCSS = styled.div`
  width: 100%;

  .cover {
    width: 70%;
    height: 250px;
    background: ${(props) => `url(${props.cover})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin-right: ${(props) => !!props.index ? 'auto' : '0'};
    margin-left: ${(props) => !!props.index ? '0' : 'auto'};
  }

  .body {
    background: green;
    padding: 1.5rem 1rem;
    min-height: 250px;
    border-radius: 5px;
  }

  // .body--title {
  //   text-align: center;
  //   color: ${props => props.theme.fonts.fontTwo}
  // }

  // .body--description {
  //   margin-top: 0.5rem;
  //   text-align: center;
  // }

  // .body--stack {
  //   margin-top: 1rem;
  //   text-align: center;
  // }

  // .body--links {
  //   margin-top: 1rem;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   a:not(:last-child) {
  //     margin-right: 0.5rem;
  //   }
  // }
`;

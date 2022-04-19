import styled from 'styled-components';

export const RootCSS = styled.div`
  .nav {
    padding: 1rem;
    position: fixed;
    height: 60px;
    background: ${props => props.theme.background.surfaceOne};
    width: 100%;
    top: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav--placeholder {
    width: 100%;
    height: 60px;
  }

  .menu {
    display: flex;
    right: 1rem;
    position: absolute;
  }

  .menu--item {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

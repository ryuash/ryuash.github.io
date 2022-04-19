import styled from 'styled-components';

export const RootCSS = styled.div`
  .nav {
    padding: 1rem 2rem;
    position: fixed;
    height: 60px;
    background: ${props => props.theme.background.surfaceOne};
    width: 100%;
    top: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px ${props => props.theme.colors.divider};
  }

  .nav--title {
    font-family: "Lobster", sans-serif;
  }

  .nav--placeholder {
    width: 100%;
    height: 60px;
  }

  .menu {
    display: flex;
  }

  .menu--item {
    ${props => props.theme.mixins.transition}
    &:not(:last-child) {
      margin-right: 1rem;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;

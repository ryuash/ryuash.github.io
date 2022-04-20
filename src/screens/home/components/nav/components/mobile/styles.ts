import styled from 'styled-components';

export const RootCSS = styled.div`
  .nav--placeholder {
    width: 100%;
    height: 50px;
  }

  .nav--block {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.background.surfaceOne};
    height: 50px;
    position: fixed;
    top: 0;
    z-index: 99;
  }

  .nav--title {
    font-family: "Lobster", sans-serif;
    color: ${props => props.theme.colors.primary};
  }

  .menu {
    ${props => props.theme.mixins.transition}
    position: fixed;
    width: ${props => props.isOpen ? '80%' : '0'};
    background: ${props => props.theme.background.surfaceOne};
    height: calc(100vh - 50px);
    top: 50px;
    right: 0;
    z-index: 60;
    overflow: hidden;
  }

  .menu--item {
    padding: 1rem;
    padding-right: 1.6rem;
    font-size: 1.1rem;
    display: block;
  }

  .menu--overlay {
    ${props => props.theme.mixins.transition}
    position: fixed;
    opacity: ${props => props.isOpen ? '100%' : '0'};
    width: 100%;
    height: 100vh;
    background: rgba(12, 13, 16, 0.50);
    z-index: 50;
  }
`;

export const NavIconCSS = styled.div`
  width: 27px;
  position: absolute;
  right: 17px;

  &:after,
  &:before,
  > div {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;
    content: '';
    display: block;
    height: 3px;
    margin: 4px 0;
    transition: all .4s ease-in-out;
  }

  ${(props) => (props.isOpen ? (
    `
        &:before {
          transform: translateY(7px) rotate(137deg)
        }

        &:after {
          transform: translateY(-7px) rotate(-137deg)
        }

        > div {
          transform: scale(0)
        }
      `
  ) : '')}
`;

import styled from 'styled-components';

export const RootCSS = styled.div`
  .nav--block {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    height: 50px;
    position: fixed;
    top: 0;
    z-index: 99;
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

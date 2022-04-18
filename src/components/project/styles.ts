import styled from 'styled-components';

export const RootCSS = styled.div`
${props => props.theme.mixins.dropShadow}
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .cover {
    height: 150px;
    background: ${(props) => `url(${props.cover})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .body {
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    border: solid 1px ${props => props.theme.colors.divider};
  }

  .body--title {
    text-align: center;
    color: ${props => props.theme.fonts.fontTwo}
  }

  .body--description {
    margin-top: 0.5rem;
    text-align: center;
  }

  .body--stack {
    margin-top: 1rem;
    text-align: center;
  }

  .body--links {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

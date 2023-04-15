import styled from 'styled-components';

export const HeaderContainer = styled.div`
  color: var(--primary-white);
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 1em 4em;
  z-index: 20;
  width: 100%;

  .desktop {
    display: flex;
    width: 100%;
  }

  .mobile {
    display: none;
  }

  img,
  .closeButton,
  .iconHeader {
    z-index: 300;
  }

  .options + a {
    z-index: 300;
  }

  .hide {
    display: none;
  }

  @media (max-width: 1024px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }

    .closeButton {
      position: absolute;
      left: 4em;
      top: 1em;
      z-index: 300;
    }
  }

  @media (max-width: 600px) and (orientation: portrait) {
    width: 100%;

    .dropButton {
      display: none;
    }

    .closeButton {
      left: 4em;
      top: 1em;
    }
  }

  @media (max-width: 420px) and (orientation: portrait) {
    .mobile{
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (max-width: 390px) and (orientation: portrait) {
    width: 40%;
  }
`;

export const Logo = styled.h1`
  color: var(--primary-aqua);
  display: inline;

  span {
    font-weight: 400;
  }
`;

export const Left = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  gap: 2em;

  svg {
    margin: 0 0.3em;
    height: 0.8em;
  }

  p {
    font-size: 18px;
    letter-spacing: 3px;
    cursor: pointer;
    padding: 0.5em;

    :hover {
      transition: 0.5s ease;
      background-color: var(--hover-white);
    }
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  gap: 5em;
  margin-right: 11em;

  img {
    width: 2.5em;
    border-radius: 50%;
    cursor: pointer;
    :hover {
      transition: 0.3s ease;
      width: 3em;
    }
  }

  .closeButton {
    display: none;
  }

  .show {
    display: block;
  }

  svg {
    padding: 0 0.5em;
    height: 3em;
    cursor: pointer;

    :hover {
      transition: 0.3s ease;
      background-color: var(--hover-white);
    }
  }

  @media (max-width: 1536px) {
    margin-right: 7em!important; //I hate importants, but this was the only way
  }

  @media (max-width: 1366px) {
    margin-right: 5em!important; //I hate importants, but this was the only way
  }

  @media (max-width: 1280px) {
    margin-right: 3em!important; //I hate importants, but this was the only way
  }

  @media (max-width: 1024px) {
    width: 100%;

    img {
      z-index: 300;
    }
  }

  .options + a {
    z-index: 300;
  }

  @media (max-width: 420px) and (orientation: portrait) {
    margin-right: -1em!important; //I hate importants, but this was the only way
  }
`;

export const ReturnText = styled.p`
  font-size: 1.4em;
  text-decoration: none;
  text-align: right;
  cursor: pointer;
`;

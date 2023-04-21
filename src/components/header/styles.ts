import styled from 'styled-components';

export const HeaderContainer = styled.div`
  color: var(--primary-white);
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 1em 4em;
  z-index: 21;
  width: 100%;

  .desktop {
    display: flex;
    width: 100%;
  }

  a {
    text-decoration: none;
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
      padding: 1em 0;
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

    a h1 {
      display: inline-flex;
    }

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
    .mobile{
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export const Logo = styled.h1`
  color: var(--primary-aqua);
  display: inline;
  letter-spacing: 1.5px;

  span {
    font-weight: 400;
  }

  @media (max-width: 390px) and (orientation: portrait) {
    width: 100%;
  }
`;

export const Left = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  gap: 2em;
  margin-left: 7em;

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
  margin-right: 7em;

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
    margin-right: 7em;
  }

  @media (max-width: 1366px) {
    margin-right: 5em;
  }

  @media (max-width: 1280px) {
    margin-right: 3em; 
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
    margin-right: -1em;
  }
`;

export const ReturnText = styled.div`
  svg {
    color:white;
    width: 3em;
    cursor: pointer;
  }
`;

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
      left: 26em;
      top: 5em;
      z-index: 300;
    }
  }

  @media (max-width: 600px) and (orientation: portrait) {
    width: 100%;
  }


  @media (max-width: 420px) and (orientation: portrait) {
    width: 60%;
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
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 2em;

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
    margin: 0 4em 0 0;
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

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ReturnText = styled.p`
  font-size: 1.4em;
  text-decoration: none;
  text-align: right;
  cursor: pointer;
`;

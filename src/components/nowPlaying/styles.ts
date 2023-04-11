import styled from 'styled-components';

export const NowPlayingContainer = styled.div`
  img {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
  }

  h2 {
    font-size: 6em;
    color: var(--primary-aqua);
    letter-spacing: 10px;
    position: absolute;
    top: 50%;
    left: 10%;
  }

  p {
    font-size: 1.5em;
    color: var(--primary-white);
    font-weight: 400;
    position: absolute;
    top: 50%;
    left: 10%;
    letter-spacing: 5px;

    span {
      font-weight: 700;
    }
  }

  @media (max-width: 768px) and (orientation: portrait) {
    img {
      width: 100%;
      height: 150vw;
      overflow: hidden;
    }

    h2 {
      font-size: 9em;
      top: 50%;
    }

    p {
      font-size: 2em;
      top: 55%;
    }
  }

  @media (max-width: 420px) and (orientation: portrait) {
    img {
      width: 100%;
      height: 200vw;
      overflow: hidden;
    }

    h2 {
      font-size: 6em;
      top: 60%;
    }

    p {
      font-size: 1.5em;
      top: 60%;
    }
  }

  @media (max-width: 390px) and (orientation: portrait) {
    h2 {
      top: 55%;
    }

    p {
      top: 55%;
    }
  }

  @media (max-width: 360px) and (orientation: portrait) {
    h2 {
      font-size: 4em;
      top: 60%;
    }

    p {
      font-size: 1.2em;
      top: 60%;
    }
  }

`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 75%;
  left: 8%;
  width: 70%;

  @media (max-width: 1566px) {
    top: 80%;
    width: 50%;
  }

  @media (max-width: 1024px) {
    top: 80%;
    width: 50%;
  }

  @media (max-width: 420px) and (orientation: portrait) {
    top: 82%;
  }

  @media (max-width: 390px) and (orientation: portrait) {
    top: 80%;
  }

  @media (max-width: 360px) and (orientation: portrait) {
    top: 73%;
  }
`;

import styled from "styled-components";

export const NowPlayingContainer = styled.div`
  img {
    width: 100%;
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

  `;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 75%;
  left: 8%;
  width: 100%;
`
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const bounceInAnimation = keyframes`${bounceIn}`;

export const NowPlayingContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0) 50%, var(--primary-grey) 80% );
    z-index: 1;
  }

  h2 {
    font-size: 6em;
    color: var(--primary-aqua);
    letter-spacing: 10px;
    position: absolute;
    top: 50%;
    left: 10%;
    text-shadow: 1px 1px 3px var(--hover-grey);
    z-index: 2;
    animation: 1s ${bounceInAnimation};
  }

  p {
    font-size: 1.5em;
    color: var(--primary-white);
    font-weight: 400;
    position: absolute;
    top: 50%;
    left: 10%;
    letter-spacing: 5px;
    text-shadow: 2px 2px 3px var(--hover-grey);

    span {
      font-weight: 700;
    }
  }
  
  @media (max-width: 1024px) {
    h2 {
      font-size: 4em;
    }
  }

  @media (max-width: 600px) and (orientation: portrait) {
    img {
      width: 100%;
      height: 150vw;
      overflow: hidden;
    }

    h2 {
      font-size: 4em;
      top: 50%;
    }

    p {
      font-size: 1.5em;
      top: 45%;
    }
  }

  @media (max-width: 420px) and (orientation: portrait) {
    img {
      width: 100%;
      height: 200vw;
      overflow: hidden;
    }

    h2 {
      font-size: 2.5em;
      top: 55%;
    }

    p {
      font-size: 1.5em;
      top: 50%;
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
  display: flex;
  top: 75%;
  left: 8%;
  width: 70%;
  z-index: 10;

  @media (max-width: 1566px) {
    top: 80%;
    width: 50%;
  }

  @media (max-width: 1024px) {
    top: 80%;
    width: 50%;

    
  @media (max-width: 600px) and (orientation: portrait) {
    width: 80%;
  }
  }

  @media (max-width: 420px) and (orientation: portrait) {
    top: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  @media (max-width: 390px) and (orientation: portrait) {
    top: 80%;
  }

  @media (max-width: 360px) and (orientation: portrait) {
    top: 73%;
  }
`;

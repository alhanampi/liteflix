import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const PopularContainer = styled.div`
  position: absolute;
  top: 8em;
  height: 70vh;
  right: 12em;
  z-index: 10;

  h2 {
    font-weight: 400;
    text-align: right;
    letter-spacing: 3px;
    cursor: pointer;
    text-shadow: 2px 2px 4px var(--hover-grey);

    span {
      font-weight: 300;
    }

    svg {
      margin-left: 0.5em;
    }
  }

  .animate {
    margin-right: -2em;
    animation: .5s ${fadeInDownAnimation};
  }

  @media (max-width: 1366px){
    right: 9em;
  }

  @media (max-width: 1280px) {
    right: 7.5em;
    h2 {
      font-size: 1.1em;
    }
  }

  @media (max-width: 600px) and (orientation: portrait) {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto;
    height: auto;
    margin-top: -10em;
    margin-left:40%;

    h2 {
      font-size: 1.2em;
      padding-bottom: 1em;
    }
  }

  @media (max-width: 420px) and (orientation: portrait) {
        margin-left: 42%;
        margin-top: -2em;
  }
`;

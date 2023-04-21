import styled, { keyframes } from 'styled-components';
import { fadeInDown, fadeInLeft } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 0em;
  right: 0em;
  background-color: var(--primary-grey-transparent);
  height: 70vh;
  width: 30%;
  z-index: 19;
  padding: 2% 4%;
  animation: .5s ${fadeInDownAnimation};
  
  .closeButton {
    margin-top: 3%;
    cursor: pointer;
    z-index: 19;
    position: relative;
    :hover {
      transition: 0.3s ease;
      background-color: var(--hover-white);
    }
  }

  ul {
    padding: 0;
    margin-top: 5em;
  }

  li {
    font-weight: 300;
    letter-spacing: 5px;
    font-size: 1.3em;
    list-style-type: none;
    padding: 3% 0;
    cursor: pointer;

    svg {
      color: var(--primary-white);
      width: 1em;
    }

    :hover {
      background-color: var(--hover-white);
      transition: 0.2s ease;
    }
  }

  .add {
    margin: 5% 0;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1536px) {
    height: 78vh;
  }

  @media (max-width: 1366px) {
    height: 80vh;
  }

  @media (max-width: 1280px) {
    height: 85vh;
  }

  @media (max-width: 1024px) {
    width: 40%;
    height: 100vh;
    top: 0em;
    left: 0em;
    background-color: var(--primary-grey);
    animation: .5s ${fadeInLeftAnimation};

    ul {
      margin-top: 5em;
    }

    li {
      .add {
        svg {
          color: var(--primary-white);
          width: 2em;
        }
      }
    }
  }

  @media (max-width: 600px) and (orientation: portrait) {
    width: 100%;
    height: 100vh;
    background-color: var(--primary-grey);

    li {
      font-size: 1.5em;
      svg {
        color: var(--primary-white);
        width: 2em;
      }
    }
  }

  @media (max-width: 600px) and (orientation: portrait) {
    ul {
    margin-top: 12em;

      li {
        font-size: 1.2em;
      }
    }
  }

  @media (max-width: 400px) and (orientation: portrait) {
    ul {
    margin-top: 8em;
    }
  }
`;

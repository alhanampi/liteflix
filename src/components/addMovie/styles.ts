import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const AddModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-grey);
  height: 37vh;
  width: 35%;
  z-index: 20;
  padding: 2% 4%;
  text-align: center;
  animation: 1s ${fadeInAnimation};

  .close {
    position: absolute;
    right: 2.5em;
    top: 1em;
    cursor: pointer;

    :hover {
      background-color: var(--hover-white);
    }
  }

  .clip {
    padding-right: 0.5em;
    transform: scaleY(-1);
  }

  h2 {
    color: var(--primary-aqua);
    font-weight: 700;
    font-size: 1.3em;
    letter-spacing: 2px;
  }

  .btn {
    border: 1px dashed var(--primary-white);
    background: transparent;
    color: var(--primary-white);
    margin: 2% 0;
    height: 25%;
    width: 100%;
    font-family: "Bebas Neue", sans-serif;
    font-size: 1em;
    letter-spacing: 2px;
    cursor: pointer;

    :hover {
      background: var(--hover-white);
    }
    .uploaderContainer {
      .shortText {
        display: none;
      }
    }
  }

  input {
    background: transparent;
    color: var(--primary-white);
    font-family: "Bebas Neue", sans-serif;
    font-size: 1em;
    border: none;
    border-bottom: 1px solid var(--primary-white);
    padding: 5px 60px;
    outline: none;
    text-align: center;
    letter-spacing: 2px;
    margin: 3% 0;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .smallBtn {
    margin-top: 2em;
    width: 40%;
  }

  @media (max-width: 1536px) {
    height: 42vh;
    .smallBtn {
      margin-top: 5em;
    }
  }

  @media (max-width: 600px) and (orientation: portrait) {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    & > * {
      margin-bottom: 3em;
    &:last-child {
      margin-bottom: 0;
    }
  }

    h2 {
      margin-top: 6em;
      font-size: 2em;
    }
    .close {
      display: none;
    }

    input {
      width: 80%;
    }

    .btn {
      height: 8em;

      .uploaderContainer {
        display: flex;
        justify-content: center;
        align-items: center;

        .longText {
          display: none;
        }
        .shortText {
          display: inline-block;
          font-size: 1.5em;
        }
        .clip {
          width: 5%;
          padding-right: 0.5em;
          transform: scaleY(-1);
        }
      }
    }
  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  .closeButton {
    display: none;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 80%;
    }

    .closeButton {
      display: block;
    }
  }
`;

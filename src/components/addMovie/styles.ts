/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const AddModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-grey);
  height: 30vh;
  width: 35%;
  z-index: 15;
  padding: 2% 4%;
  text-align: center;

  .close {
    position: absolute;
    right: 2.5em;
    top: 1em;
    cursor: pointer;

    :hover {
      background-color: var(--hover-white)
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
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1em;
    letter-spacing: 2px;
    cursor: pointer;

    :hover {
      background: var(--hover-white)
    }
  }

  input {
    background: transparent;
    color: var(--primary-white);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1em;
    border:none;
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
`;

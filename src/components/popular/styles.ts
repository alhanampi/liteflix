import styled from 'styled-components';

export const PopularContainer = styled.div`
  position: absolute;
  top: 8em;
  height: 70vh;
  right: 4em;
  z-index: 20;

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

  @media (max-width: 1280px) {
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
    margin-top: -2em;
    margin-left:30%;

    h2 {
      font-size: 1.2em;
      padding-bottom: 1em;
    }
  }

  @media (max-width: 420px) and (orientation: portrait) {
        margin-left:24%;
  }
`;

import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const PopularContainer = styled.div`
  position: absolute;
  top: 8em;
  height: 70vh;
  right: 4em;

  h2 {
    font-weight: 400;
    text-align: right;
    letter-spacing: 3px;
    cursor: pointer;

    span {
      font-weight: 300;
    }

    svg {
      margin-left: 0.5em;
    }
  }
`;

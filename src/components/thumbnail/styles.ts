/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ThumbnailContainer = styled.div`
  cursor: pointer;
  margin: 2em;
  position: relative;
  transition: filter 0.5s ease;

  img {
    display: block;
    height: 120px;
    position: relative;

    &.big {
      height: 200px;
    }

    &.mid {
      height: 140px;
    }
  }

  h3 {
    position: absolute;
    bottom: 0;
    left: 20%;
    transform: translateX(-20%);
    margin: 0;
    padding: 0.5em;
    color: white;
    font-weight: 400;
    letter-spacing: 2px;
  }

  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3em;
    color: white;
  }

  .hover {
    display: none;
  }

  &:hover {
    img,
    & {
      filter: brightness(70%);
    }

    .play {
      left: 20%;
    }

    h3 {
      top: 35%;
      left: 40%;
    }

    .hover {
      display: block;

      .scoreContainer {
        position: absolute;
        bottom: 0;
        left: 4%;
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-between;
        .star {
          fill: var(--primary-aqua);
        }
        span {
          display: flex;
          width: 50%;
          align-items: center;
        }
      }
    }
  }
`;

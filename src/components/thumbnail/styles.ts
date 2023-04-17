import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const ThumbnailContainer = styled.div`
  cursor: pointer;
  margin: 2em 2em;
  position: relative;
  transition: filter 0.5s ease;
  filter: drop-shadow(4px 3px 3px var(--hover-white));

  img {
    display: block;
    height: 120px;
    position: relative;

    &.big {
      height: 300px;
    }

    &.biggish {
      height: 140px;
    }

    &.mid {
      height: 120px;
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
    text-shadow: 2px 2px 4px var(--hover-grey);
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
      left: 15%;
    }

    h3 {
      top: 45%;
      bottom: 0;
      left: 35%;
      z-index: 1;

      &.movie {
        top: 35%;
        bottom: 0;
        left: 35%;
      }
    }

    .hover {
      display: block;
      animation: 1s ${fadeInDownAnimation};

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

  @media (max-width: 1536px) {
    img.biggish {
      height: 130px;
    }

    h3 {
      font-size: 0.9em;
    }
  }

  @media (max-width: 1366px) {
    img.biggish {
      height: 100px;
    }

    h3 {
      font-size: 0.8em;
    }
  }

  @media (max-width: 1280px) {
    img.biggish {
      height: 95px;
    }
    .hover {
      display: none;
    }
    h3 {
      font-size: 0.8em;
    }
  }

  @media (max-width: 1024px) {
    img.biggish {
      height: 70px;
    }
    svg.play {
      font-size: 2em;
    }

    &:hover {
      .box.biggish h3 {
        font-size: 0.7em;
      }
    }
  }

  @media (max-width: 600px) and (orientation: portrait) {
    width: 150px;

    img.biggish {
      height: 150px;
    }

    .play {
      left: 62%;
    }

    .box.biggish .play {
      left: 90%;
    }

    .box.mid .play {
      left: 70%;
    }

    &:hover {
      .box.big h3 {
        left: 63%;
        font-size: 1.2em;
        width: 100%;
        top: 40%;
      }
      .big .play {
        left: 28%;
      }
      .big .scoreContainer {
        width: 125%;
      }

      .box.biggish h3 {
        left: 68%;
        font-size: 1.2em;
        width: 134%;
      }

      .biggish .play {
        left: 28%;
      }
      .biggish .scoreContainer {
        width: 150%;
      }
      .box.mid h3 {
        left: 63%;
        font-size: 1.2em;
        width: 100%;
      }
      .mid .play {
        left: 28%;
      }
      .mid .scoreContainer {
        width: 128%;
      }
    }
  }
`;

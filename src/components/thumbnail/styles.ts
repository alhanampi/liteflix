/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ThumbnailContainer = styled.div`
  cursor: pointer;
  margin: 2em;
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
      height: 170px;
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
    height: 110px;
    }

  h3 {
    font-size: 0.8em;
  }
}
  
  @media (max-width: 1280px) {
  img.biggish {
    height: 100px;
  }
  .hover {
    display: none;
  }
  h3 {
    font-size: 0.8em;
  }

  @media (max-width: 1024px) {
      img.biggish {
      height: 80px;
    }
  }
}`;

/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
import { FC } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { ThumbnailContainer } from './styles';

export interface IThumbnail {
  image: string;
  text: string;
  score?: number;
  year?: string;
  size?: string;
  onClick?: any;
  movie?: boolean;
}

const Thumbnail: FC<IThumbnail> = ( {
  image,
  text,
  score,
  year,
  size,
  onClick,
  movie,
} ) => (
  <ThumbnailContainer onClick={ onClick }>
    <div className={ `box ${size && size}` }>
      <span className={ `${size && size}Span` }>
        <img src={ image } alt="thumbnail" className={ size && size } />
      </span>
      <BsPlayCircle className="play" />
      <h3 className={ movie ? 'movie' : 'series' }>{text}</h3>

      {score && year ? (
        <div className="hover">
          <div className="scoreContainer">
            <span>
              <AiFillStar className="star" />
            &nbsp;
              <p>{score}</p>
            </span>
            <p>{year}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  </ThumbnailContainer>
);

export default Thumbnail;

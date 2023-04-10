/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-useless-fragment */
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
}

const Thumbnail: FC<IThumbnail> = ( {
  image, text, score, year, size,
} ) => (
  <ThumbnailContainer>
    <span>
      <img src={ image } alt="thumbnail" className={ size && size } />
    </span>
    <h3>{text}</h3>
    <BsPlayCircle className="play" />

    {score && year ? (
      <div className="hover">
        <div className="scoreContainer">
          <span>
            <AiFillStar className="star" />
            {' '}
            <p>{score}</p>
          </span>
          <p>{year}</p>
        </div>
      </div>
    ) : <></>}
  </ThumbnailContainer>
);

export default Thumbnail;

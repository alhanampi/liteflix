/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
import { FC, useEffect, useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { AiFillStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { ThumbnailContainer } from './styles';

export interface IThumbnail {
  image: string;
  text: string;
  score?: number;
  year?: string;
  size?: string;
  onClick?: any;
}

const Thumbnail: FC<IThumbnail> = ( {
  image,
  text,
  score,
  year,
  size,
  onClick,
} ) => {
  const [isInMyList, setIsInMyList] = useState( false );
  const [myMovies, setMyMovies] = useState( [] );

  // useEffect( () => {
  //   const storedMyMovies = localStorage.getItem( 'myMovies' );
  //   if ( storedMyMovies ) {
  //     setMyMovies( JSON.parse( storedMyMovies ) );
  //   }
  // }, [] );

  // está reemplazando en vez de sumar, y al dar f5 no retiene el corazon lleno - revisar
  // const toggleMyList = ( event: React.MouseEvent<HTMLDivElement> ) => {
  //   event.stopPropagation();
  //   const updatedMyMovies = [...myMovies];
  //   if ( isInMyList ) {
  //     const index = updatedMyMovies.findIndex(
  //       ( movie: IThumbnail ) => movie.text === text,
  //     );
  //     updatedMyMovies.splice( index, 1 );
  //   } else {
  //     updatedMyMovies.push( {
  //       image, text, score, year, size,
  //     } );
  //   }
  //   setIsInMyList( !isInMyList );
  //   setMyMovies( updatedMyMovies );
  //   localStorage.setItem( 'myMovies', JSON.stringify( updatedMyMovies ) );
  // };

  return (
    <ThumbnailContainer onClick={ onClick }>
      {/* <div className="heart" onClick={ toggleMyList }>
        {isInMyList ? (
          <AiFillHeart size={ 24 } />
        ) : (
          <AiOutlineHeart size={ 24 } />
        )} */}
      {/* </div> */}
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
      ) : (
        <></>
      )}
    </ThumbnailContainer>
  );
};

export default Thumbnail;

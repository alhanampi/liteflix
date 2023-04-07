import { FC } from "react";
import { ThumbnailContainer } from "./styles";
import { BsPlayCircle } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export interface IThumbnail {
  image: string;
  text: string;
  score: number;
  year: string;
}

const Thumbnail: FC<IThumbnail> = ({ image, text, score, year }) => {
  return (
    <ThumbnailContainer>
      <span>
        <img src={image} />
      </span>
      <h3>{text}</h3>
      <BsPlayCircle className="play" />

      <div className="hover">
        <div className="scoreContainer">
          <span>
            <AiFillStar className="star" /> <p>{score}</p>
          </span>
          <p>{year}</p>
        </div>
      </div>
    </ThumbnailContainer>
  );
};

export default Thumbnail;

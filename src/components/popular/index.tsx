import { getPopular } from "@/services/movieService";
import { FC, useEffect, useState, useRef } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { PopularContainer } from "./styles";
import Thumbnail from "../thumbnail";

const Popular: FC = () => {
  const [popular, setPopular] = useState<any>([]);
  const [showPopular, setShowPopular] = useState<boolean>(false);

  useEffect(() => {
    getPopular()
      .then((res) => {
        setPopular(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <PopularContainer>
        <h2 onClick={() => setShowPopular(!showPopular)}>
          <span>Ver:</span> populares
          {showPopular ? <BsChevronUp /> : <BsChevronDown />}
        </h2>
        {showPopular && (
          <div>
            {popular.map((p: any) => (
              <Thumbnail
                image={`https://image.tmdb.org/t/p/w500${p.backdrop_path}`}
                text={p.original_title}
                score={p.vote_average}
                year={p.release_date.slice(0, 4)}
                key={p.original_title}
              />
            ))}
          </div>
        )}
      </PopularContainer>
    </div>
  );
};

export default Popular;

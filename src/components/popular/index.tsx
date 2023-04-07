import { getPopular } from "@/services/movieService";
import { FC, useEffect, useState } from "react";
import { BsChevronDown, BsPlayCircle } from "react-icons/bs";
import { PopularContainer } from "./styles";
import Thumbnail from "../thumbnail";

const Popular: FC = () => {
  const [popular, setPopular] = useState<any>([]);

  useEffect(() => {
    getPopular()
      .then((res) => {
        console.log("res", res);
        setPopular(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <PopularContainer>
      <h2><span>Ver:</span> populares

        <BsChevronDown />
      </h2>
      {popular.map((p: any) => (
        <>
        <Thumbnail 
          image={`https://image.tmdb.org/t/p/w500${p.backdrop_path}`}
          text={p.original_title}
          score={p.vote_average}
          year={p.release_date.slice(0, 4)}
          key={p.original_title}
          />

        </>
      ))}
      </PopularContainer>
    </div>
  );
};

export default Popular;

import { getNowPlaying } from "@/services/movieService";
import { FC, useEffect, useState } from "react";
import { NowPlayingContainer, ButtonContainer } from "./styles";
import Button from "../button";
import { BiPlay } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";

const NowPlaying: FC = () => {
  const [nowPlaying, setNowPlaying] = useState<any>([]);

  useEffect(() => {
    getNowPlaying()
      .then((res) => {
        setNowPlaying(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <NowPlayingContainer>
      <img
        src={`https://image.tmdb.org/t/p/original${nowPlaying.backdrop_path}`}
        alt="image poster"
      />
      <h2>{nowPlaying.original_title}</h2>
      <p>
        Original de <span> LITEFLIX</span>
      </p>
      <ButtonContainer>
        <Button text="Reproducir" icon={<BiPlay />} variation={true} />
        <Button text="Mi Lista" icon={<VscAdd />} variation={false} />
      </ButtonContainer>
    </NowPlayingContainer>
  );
};

export default NowPlaying;

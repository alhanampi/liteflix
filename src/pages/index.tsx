import Header from "@/components/header";
import NowPlaying from "@/components/nowPlaying";
import Popular from "@/components/popular";
import React from "react";

const index = () => {
  return (
    <div>
      <Header />
      <NowPlaying />
      <Popular />
    </div>
  );
};

export default index;

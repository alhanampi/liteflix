import React, { FC } from 'react';
import Header from '@/components/header';
import NowPlaying from '@/components/nowPlaying';
import Popular from '@/components/popular';

const index: FC = () => (
  <div>
    <Header />
    <NowPlaying />
    <Popular />
  </div>
);

export default index;

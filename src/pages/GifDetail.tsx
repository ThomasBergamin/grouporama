import Navbar from '../components/Navbar';
import React from 'react';
import Card from '../components/GifCard';
import { useGif } from '../hooks/useGif';
import { useParams } from 'react-router-dom';

export const GifDetail = () => {
  const { id } = useParams<Record<string, string>>();
  const { gif } = useGif(id);
  console.log('triggered');
  return (
    <>
      <Navbar />
      {gif && <Card id={id} title={gif.title} />}
    </>
  );
};

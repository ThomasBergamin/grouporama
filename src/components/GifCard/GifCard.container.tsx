import React from 'react';
import { IGif } from '../../common/model/IGif';
import { useGifAuthor } from '../../hooks/useGifAuthor';
import GifCard from './GifCard.component';

interface IGifCardContainer {
  gif: IGif;
}

const GifCardContainer = ({ gif }: IGifCardContainer) => {
  const { gifAuthor } = useGifAuthor(gif.userId);
  console.log(gif);
  return (
    <GifCard
      title={gif.title}
      id={gif.id}
      authorName={gifAuthor?.firstName}
      key={gif.id}
      imageUrl={gif.url}
    />
  );
};

export default GifCardContainer;

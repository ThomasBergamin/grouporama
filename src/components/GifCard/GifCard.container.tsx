import React, { useEffect } from 'react';
import { IGif } from '../../common/model/IGif';
import { useGifAuthor } from '../../hooks/useGifAuthor';
import Loader from '../Loader';
import GifCard from './GifCard.component';

interface IGifCardContainer {
  gif: IGif;
}

const GifCardContainer = ({ gif }: IGifCardContainer) => {
  const { gifAuthor, loading } = useGifAuthor(gif.userId);
  const gifDate = gif.createdAt.split('T')[0];
  const gifHour = gif.createdAt.split('T')[1].substring(0, 5);

  return !loading ? (
    <GifCard
      title={gif.title}
      id={gif.id}
      authorName={gifAuthor?.firstName}
      key={gif.id}
      imageUrl={gif.url}
      date={gifDate}
      hours={gifHour}
    />
  ) : (
    <Loader />
  );
};

export default GifCardContainer;

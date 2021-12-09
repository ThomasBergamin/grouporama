import React from 'react';
import { IGif } from '../../common/model/IGif';
import { useGifAuthor } from '../../hooks/useGifAuthor';
import Loader from '../Loader';
import GifCard from './GifCard.component';
import { getDate, getMonth } from 'date-fns';

interface IGifCardContainer {
  gif: IGif;
}

const GifCardContainer = ({ gif }: IGifCardContainer) => {
  const { gifAuthor, loading } = useGifAuthor(gif.userId);
  const gifDate = new Date(gif.createdAt);
  const gifDays = getDate(gifDate) + '/' + (getMonth(gifDate) + 1);
  const gifHour = gifDate.getHours() + ':' + gifDate.getMinutes();

  return !loading ? (
    <GifCard
      title={gif.title}
      id={gif.id}
      authorName={gifAuthor?.firstName}
      key={gif.id}
      imageUrl={gif.url}
      date={gifDays}
      hours={gifHour}
    />
  ) : (
    <Loader />
  );
};

export default GifCardContainer;

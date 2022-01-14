import React, { useEffect, useState } from 'react';
import { IGif } from '../../common/model/IGif';
import { useGifAuthor } from '../../hooks/useGifAuthor';
import Loader from '../Loader';
import GifCard from './GifCard.component';
import { getDate, getMonth } from 'date-fns';
import { useAuth } from '../../contexts/Auth/useAuth';
import { CommentsList } from '../Comments/CommentsList';

interface IGifCardContainer {
  gif: IGif;
  withComments?: boolean;
}

const GifCardContainer = ({ gif, withComments = false }: IGifCardContainer) => {
  const auth = useAuth();
  const { gifAuthor, loading } = useGifAuthor(gif.userId);
  const [isCurrentUserAuthor, setIsCurrentUserAuthor] = useState(false);

  const gifDate = new Date(gif.createdAt);
  const gifDays = getDate(gifDate) + '/' + (getMonth(gifDate) + 1);
  const gifHour =
    gifDate.getHours() +
    ':' +
    (gifDate.getMinutes() < 10 ? '0' : '') +
    gifDate.getMinutes();

  useEffect(() => {
    if (auth?.currentUser.userId === gif.userId) {
      setIsCurrentUserAuthor(true);
    }
  }, [gif]);

  return !loading ? (
    <div className="maw-w-128 flex mx-6 flex-col items-center">
      <GifCard
        withComments={withComments}
        title={gif.title}
        id={gif.id}
        authorName={gifAuthor?.firstName}
        key={gif.id}
        imageUrl={gif.url}
        date={gifDays}
        hours={gifHour}
        isCurrentUserAuthor={isCurrentUserAuthor}
      />

      {gif.comments && withComments && (
        <div className="mt-4 mb-16">
          <CommentsList gifId={gif.id} comments={gif.comments} />
        </div>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default GifCardContainer;

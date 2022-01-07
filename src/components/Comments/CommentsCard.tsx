import { getDate, getMonth } from 'date-fns';
import React from 'react';
import { IComment } from '../../common/model/IComment';
import { useGifAuthor } from '../../hooks/useGifAuthor';

interface ICommentsCard {
  comment: IComment;
}

const CommentsCard = ({ comment }: ICommentsCard) => {
  const { gifAuthor } = useGifAuthor(comment.userId);
  const commentDate = new Date(comment.createdAt);
  const commentDays = getDate(commentDate) + '/' + (getMonth(commentDate) + 1);
  const commentHour =
    commentDate.getHours() +
    ':' +
    (commentDate.getMinutes() < 10 ? '0' : '') +
    commentDate.getMinutes();
  return (
    <>
      <div className="flex">
        <div className="flex-shrink-0 mr-3">
          <img
            className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
            alt=""
          />
        </div>
        <div className="flex-1 border border-gray shadow-md rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
          <strong>{gifAuthor?.firstName}</strong>
          <span className="text-xs text-gray-400 ml-1">
            {`Le ${commentDays} à ${commentHour}`}{' '}
          </span>
          <p className="text-sm">{comment.content}</p>
        </div>
      </div>
    </>
  );
};

export { CommentsCard };

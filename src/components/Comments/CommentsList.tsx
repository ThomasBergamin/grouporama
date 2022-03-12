import React from 'react';
import { IComment } from '../../common/model/IComment';
import { CommentsCard } from './CommentsCard';
import { CommentsForm } from './CommentsForm';

interface ICommentsList {
  gifId: string;
  comments: IComment[];
  isSuperAdmin: boolean;
}

const CommentsList = ({ gifId, comments, isSuperAdmin }: ICommentsList) => {
  return (
    <div className="antialiased mx-auto max-w-screen-sm mt-4">
      <h3 className="mb-4 text-xl font-semibold">Commentaires</h3>
      <div className="space-y-4">
        {comments.map((comment) => {
          return (
            <CommentsCard
              isSuperAdmin={isSuperAdmin}
              key={comment.id}
              comment={comment}
            />
          );
        })}
      </div>
      <CommentsForm gifId={gifId} />
    </div>
  );
};

export { CommentsList };

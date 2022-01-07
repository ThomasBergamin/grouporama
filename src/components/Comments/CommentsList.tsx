import React from 'react';
import { CommentsCard } from './CommentsCard';
import { CommentsForm } from './CommentsForm';

const CommentsList = () => {
  return (
    <div className="antialiased mx-auto max-w-screen-sm">
      <h3 className="mb-4 text-lg font-semibold">Commentaires</h3>
      <div className="space-y-4">
        <CommentsCard />
        <CommentsForm />
      </div>
    </div>
  );
};

export { CommentsList };

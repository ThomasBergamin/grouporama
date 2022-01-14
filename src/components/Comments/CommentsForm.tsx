import React from 'react';
import dbService from '../../services/dbService';
import Button from '../Button';
import { useAuth } from '../../contexts/Auth/useAuth';

interface ICommentsForm {
  gifId: string;
}

const CommentsForm = ({ gifId }: ICommentsForm) => {
  const auth = useAuth();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      body: { value: string };
    };
    const content = target.body.value;
    if (auth && auth.currentUser && auth.currentUser.token) {
      try {
        dbService.postComment(
          auth.currentUser.userId,
          content,
          gifId,
          auth.authHeader(),
        );
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="flex items-center justify-center border-2 border-gray rounded-lg mt-12 shadow-md mb-4 max-w-lg">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-lightGray rounded-lg px-4 pt-2"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-lg">
            Ajouter un nouveau commentaire
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-4">
            <textarea
              className="bg-gray-100 border border-gray rounded-lg  leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Entre ton commentaire ici"
              required
            ></textarea>
          </div>
          <div className="w-full md:w-full flex items-start px-3">
            <Button label="Poste ton commentaire" primary type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export { CommentsForm };

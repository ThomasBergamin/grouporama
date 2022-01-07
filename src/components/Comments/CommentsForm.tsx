import React from 'react';
import Button from '../Button';

const CommentsForm = () => {
  return (
    <div className="flex items-center justify-center border border-gray rounded-lg shadow-md mt-56 mb-4 max-w-lg">
      <form className="w-full max-w-xl bg-lightGray rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-lg">
            Ajouter un nouveau commentaire
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
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

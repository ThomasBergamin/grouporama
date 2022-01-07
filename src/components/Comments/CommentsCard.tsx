import React from 'react';

const CommentsCard = () => {
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
          <strong>Sarah</strong>
          <span className="text-xs text-gray-400 ml-1">Le 11/12 à 11:10 </span>
          <p className="text-sm">
            Trop beau ce paysage le pied vraiment incroyable, jamais je ne
            reverrai quelque chose de semblable
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex-shrink-0 mr-3">
          <img
            className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
            alt=""
          />
        </div>
        <div className="flex-1 border border-gray shadow-md rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
          <strong>Jeanne</strong>
          <span className="text-xs text-gray-400 ml-1">Le 11/12 à 11:10 </span>
          <p className="text-sm">Waooooow incroyable cette photo</p>
        </div>
      </div>
    </>
  );
};

export { CommentsCard };

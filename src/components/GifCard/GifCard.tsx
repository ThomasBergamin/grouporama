import React from 'react';

interface IGifCard {
  title: string;
  authorName?: string;
  authorImg?: string;
  imageUrl?: string;
}

const GifCard = ({ title, imageUrl, authorName, authorImg }: IGifCard) => {
  return (
    <div
      className="bg-white p-4 border-0 border-transparent rounded-md shadow-lg w-2/5 
    "
    >
      <h2 className="font-bold text-xl mb-4 text-black cursor-pointer transform transition hover:text-primary">
        {title}
      </h2>
      <img
        className="w-full rounded-md cursor-pointer"
        src={imageUrl}
        alt={`Gif posté par ${authorName}`}
      />

      <div className="flex mt-4 place-content-end items-center">
        <p className="text-darkGray pr-2">
          Il y a 4h ·
          <span className="italic text-primary cursor-pointer transform transition hover:text-secondary ">
            {authorName}
          </span>
        </p>
        <img
          className="inline cursor-pointer object-cover w-12 h-12 mr-2 rounded-full transform transition duration-500 hover:shadow-lg hover:scale-105"
          src={authorImg}
          alt="Image de profil"
        />
      </div>
    </div>
  );
};

export default GifCard;

import React from 'react';
import { useHistory } from 'react-router';
import { FiEdit } from 'react-icons/fi';

interface IGifCard {
  id: string;
  title: string;
  isCurrentUserAuthor: boolean;
  authorName?: string;
  authorImg?: string;
  imageUrl?: string;
  date?: string;
  hours?: string;
}

const GifCard = ({
  title,
  imageUrl,
  authorName,
  authorImg,
  id,
  date,
  hours,
  isCurrentUserAuthor,
}: IGifCard) => {
  const history = useHistory();
  const goToDetail = () => {
    history.push(`gifs/${id}`);
  };
  const goToEdit = () => {
    history.push(`gifs/edit/${id}`);
  };
  return (
    <div
      className="bg-white p-4 border-0 border-transparent rounded-2xl shadow-lg w-2/5 
    "
    >
      <div className="flex items-baseline justify-between">
        <h2
          onClick={goToDetail}
          className="font-bold text-xl mb-4 text-black cursor-pointer transform transition hover:text-primary"
        >
          {title}
        </h2>
        {isCurrentUserAuthor && (
          <FiEdit
            onClick={goToEdit}
            size={21}
            className="cursor-pointer text-tertiary"
          />
        )}
      </div>
      <img
        onClick={goToDetail}
        className="w-full rounded-md cursor-pointer"
        src={imageUrl}
        alt={`Gif posté par ${authorName}`}
      />

      <div className="flex mt-4 place-content-end items-center">
        <p className="text-darkGray pr-2">
          Le {date} à {hours} ·
          <span className="italic text-primary cursor-pointer transform transition hover:text-secondary ">
            {' ' + authorName}
          </span>
        </p>
        {authorImg && (
          <img
            className="inline cursor-pointer object-cover w-12 h-12 mr-2 rounded-full transform transition duration-500 hover:shadow-lg hover:scale-105"
            src={authorImg}
            alt="Image de profil"
          />
        )}
      </div>
    </div>
  );
};

export default GifCard;

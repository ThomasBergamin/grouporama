import React from 'react';
import { useHistory } from 'react-router';
import { FiEdit } from 'react-icons/fi';

interface IGifCard {
  id: string;
  title: string;
  isCurrentUserAuthor: boolean;
  withComments?: boolean;
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
  withComments,
  isCurrentUserAuthor,
}: IGifCard) => {
  const history = useHistory();
  const goToDetail = () => {
    if (!withComments) {
      history.push(`gifs/${id}`);
    }
  };
  const goToEdit = () => {
    if (!withComments) {
      history.push(`gifs/edit/${id}`);
    } else {
      history.push(`edit/${id}`);
    }
  };
  return (
    <div className="bg-white border border-gray p-4 border-transparent rounded-2xl shadow-lg">
      <div className="flex items-baseline justify-between">
        <h2
          onClick={goToDetail}
          className={`font-bold text-xl mb-4 text-black ${
            !withComments &&
            'cursor-pointer transform transition  hover:text-primary'
          } `}
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
      <div className="">
        <img
          onClick={goToDetail}
          className={`w-96 bg-cover object-contain rounded-md ${
            !withComments && 'cursor-pointer'
          }`}
          src={imageUrl}
          alt={`Gif posté par ${authorName}`}
        />
      </div>

      <div className="flex mt-4 place-content-end items-center">
        <p className="text-darkGray pr-2">
          Le {date} à {hours} ·
          <span className="italic text-primary">{' ' + authorName}</span>
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

import React from 'react';

interface IGifCard {
  title: string;
  imageUrl?: string;
}

const GifCard = ({ title, imageUrl }: IGifCard) => {
  return (
    <div
      className="bg-white p-4 border-0 border-transparent rounded-md shadow-lg max-w-lg 
    "
    >
      <h2 className="font-bold text-xl mb-4 text-black cursor-pointer transform transition duration-500 hover:text-primary">
        {title}
      </h2>
      <img
        className="w-full rounded-md cursor-pointer"
        src={imageUrl}
        alt="Mountain"
      />
      <div className="flex mt-4 place-content-end items-center">
        <p className="text-darkGray pr-2">
          Il y a 4h ·{' '}
          <span className="italic cursor-pointer transform transition duration-500 hover:text-primary ">
            Ludovic B.
          </span>
        </p>
        <img
          className="inline cursor-pointer object-cover w-12 h-12 mr-2 rounded-full transform transition duration-500 hover:shadow-lg hover:scale-105"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
      </div>
    </div>
  );
};

export default GifCard;

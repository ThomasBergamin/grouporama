import React from 'react';
import { IGif } from '../../common/model/IGif';
import GifCard from '../GifCard';

export interface ICardList {
  gifs: IGif[];
}

const CardList = ({ gifs }: ICardList) => {
  return (
    <>
      {gifs.map((gif) => (
        <GifCard gif={gif} key={gif.id} />
      ))}
    </>
  );
};

export default CardList;

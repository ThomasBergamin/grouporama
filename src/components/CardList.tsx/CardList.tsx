import React from 'react';
import { IGif } from '../../common/model/IGif';
import GifCard from '../GifCard';

export interface ICardList {
  gifs: IGif[];
}

const CardList = ({ gifs }: ICardList) => {
  return (
    <div className="m-3 mt-8 flex-col flex gap-8 items-center justify-center">
      {gifs.map((gif) => (
        <GifCard gif={gif} key={gif.id} />
      ))}
    </div>
  );
};

export default CardList;

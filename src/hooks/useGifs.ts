import { useState, useEffect } from 'react';
import { IGif } from '../common/model/IGif';
import dbService from '../services/dbService';

export const useGifs = () => {
  const [gifs, setGifs] = useState<IGif[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    dbService
      .getGifs()
      .then((response) => setGifs(response.data))
      .catch((error) => console.log(error));
  });

  return { loading, gifs };
};

import { useState, useEffect } from 'react';
import { IGif } from '../common/model/IGif';
import dbService from '../services/dbService';

export const useGifs = () => {
  const [gifs, setGifs] = useState<IGif[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    dbService
      .getGifs(signal)
      .then((response) => setGifs(response.data))
      .catch((error) => console.log(error));
    return () => controller.abort();
  }, []);

  return { loading, gifs };
};

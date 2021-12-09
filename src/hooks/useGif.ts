import { useState, useEffect } from 'react';
import { IGif } from '../common/model/IGif';
import dbService from '../services/dbService';

export const useGif = (id: string) => {
  console.log('received id', id);
  const [gif, setGif] = useState<IGif>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    dbService
      .getGif(id, signal)
      .then((response) => {
        setGif(response.data);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    return () => controller.abort();
  }, []);

  return { loading, gif };
};

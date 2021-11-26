import { useState, useEffect } from 'react';
import { IGif } from '../common/model/IGif';
import dbService from '../services/dbService';

export const useGif = (id: string) => {
  const [gif, setGif] = useState<IGif>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    dbService
      .getGif(id, signal)
      .then((response) => setGif(response.data))
      .catch((error) => console.log(error));
    return () => controller.abort();
  });

  return { loading, gif };
};

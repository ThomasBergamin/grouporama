import { useState, useEffect } from 'react';
import dbService from '../services/dbService';

export const useGifAuthor = (id: string) => {
  const [gifAuthor, setGifAuthor] =
    useState<{ id: string; lastName: string; firstName: string }>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    dbService
      .getUser(id, signal)
      .then((response) => {
        setGifAuthor(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    return () => controller.abort();
  }, []);

  return { loading, gifAuthor };
};

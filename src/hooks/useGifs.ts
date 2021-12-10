import { useState, useEffect } from 'react';
import { IGif } from '../common/model/IGif';
import dbService from '../services/dbService';
import { useAuth } from '../contexts/Auth/useAuth';

export const useGifs = () => {
  const [gifs, setGifs] = useState<IGif[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    if (auth) {
      const token = auth.authHeader();
      dbService
        .getGifs(signal, token)
        .then((response) => {
          setGifs(response.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
    return () => controller.abort();
  }, []);

  return { loading, gifs };
};

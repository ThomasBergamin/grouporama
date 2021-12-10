import { useState, useEffect } from 'react';
import { IGif } from '../common/model/IGif';
import { useAuth } from '../contexts/Auth/useAuth';
import dbService from '../services/dbService';

export const useGif = (id: string) => {
  const [gif, setGif] = useState<IGif>();
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    if (auth) {
      const token = auth.authHeader();
      dbService
        .getGif(id, signal, token)
        .then((response) => {
          setGif(response.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
    return () => controller.abort();
  }, []);

  return { loading, gif };
};

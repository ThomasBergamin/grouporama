import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/Auth/useAuth';
import dbService from '../services/dbService';

export const useGifAuthor = (id: string) => {
  const [gifAuthor, setGifAuthor] =
    useState<{ id: string; lastName: string; firstName: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    if (auth) {
      const token = auth.authHeader();
      dbService
        .getUser(id, signal, token)
        .then((response) => {
          setGifAuthor(response.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
    return () => controller.abort();
  }, []);

  return { loading, gifAuthor };
};

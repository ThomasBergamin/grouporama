import Navbar from '../components/Navbar';
import React from 'react';
import { useGifs } from '../hooks/useGifs';
import CardList from '../components/CardList';
import Button from '../components/Button';
import { useHistory } from 'react-router';
import Loader from '../components/Loader';

export const Home = () => {
  const { gifs, loading } = useGifs();
  const history = useHistory();
  const handlePost = () => history.push('post');
  return (
    <>
      <Navbar />
      <div className="fixed bottom-12 right-12">
        <Button label="Post a gif" primary onClick={handlePost} />
      </div>
      <div className="m-3 mt-8 flex-col flex gap-8 items-center justify-center">
        {!loading ? gifs && <CardList gifs={gifs} /> : <Loader />}
      </div>
    </>
  );
};

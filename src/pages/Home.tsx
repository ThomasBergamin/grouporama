import Navbar from '../components/Navbar';
import React from 'react';
import { useGifs } from '../hooks/useGifs';
import CardList from '../components/CardList';
import Button from '../components/Button';
import { useHistory } from 'react-router';
import Card from '../components/GifCard/GifCard.component';
import Loader from '../components/Loader';

export const Home = () => {
  const { gifs, loading } = useGifs();
  const history = useHistory();
  const handlePost = () => history.push('post');
  return (
    <>
      <Navbar />
      <div className="m-3 mt-8 flex-col flex gap-8 items-center justify-center">
        <Button label="Post a gif" primary onClick={handlePost} />
        <Card
          id="test"
          authorImg="https://wac-cdn.atlassian.com/fr/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=99"
          authorName="Thomas B."
          imageUrl={
            'https://media4.giphy.com/media/bzE1WAm8BifiE/giphy.gif?cid=ecf05e47wk4ipbiejpg9c9nvs4iibhb0me0f843thhwxc0gh&rid=giphy.gif&ct=g'
          }
          title="Test"
        />
        {!loading ? gifs && <CardList gifs={gifs} /> : <Loader />}
      </div>
    </>
  );
};

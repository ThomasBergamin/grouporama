import Navbar from '../components/Navbar';
import React from 'react';
import Card from '../components/GifCard';

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="m-3">
        <Card
          imageUrl={
            'https://upload.wikimedia.org/wikipedia/commons/2/20/Red_Slate_Mountain_1.jpg'
          }
          title="Mon premier gif"
        />
      </div>
    </>
  );
};

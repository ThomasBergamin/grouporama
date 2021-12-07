import Navbar from '../components/Navbar';
import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import dbService from '../services/dbService';
import { useAuth } from '../contexts/Auth/useAuth';
import Button from '../components/Button';

export const PostGif = () => {
  const { userId } = useAuth();
  const [title, setTitle] = useState('');
  const [fileName, setFileName] = useState('');
  const [url, setUrl] = useState('');
  const history = useHistory();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const urlLink = fileName ? fileName : url;
    dbService
      .postGif(userId, title, urlLink)
      .then(() => history.push('/home'))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <div className="m-3 mt-8 flex-col flex gap-8 items-center justify-center">
        <form onSubmit={handleSubmit}>
          <label>
            Enter the title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Enter url:
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <label>
            Insert file:
            <input
              type="file"
              id="imageFile"
              accept="image/png, image/jpeg, image/jpg, image/gif"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </label>

          <Button type="submit" primary label="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
};

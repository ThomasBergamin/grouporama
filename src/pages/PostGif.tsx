import Navbar from '../components/Navbar';
import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import dbService from '../services/dbService';
import { useAuth } from '../contexts/Auth/useAuth';
import Button from '../components/Button';
import Input from '../components/Input';

export const PostGif = () => {
  const { userId } = useAuth();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState('');
  const history = useHistory();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log({ file });

    // Form validation
    if (file) {
      dbService
        .postGif(userId, title, undefined, file)
        .then(() => history.push('/home'))
        .catch((error) => console.log(error));
    } else {
      dbService
        .postGif(userId, title, url)
        .then(() => history.push('/home'))
        .catch((error) => console.log(error));
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    setFile(file);
  };
  return (
    <>
      <Navbar />
      <div className="m-3 mt-8 flex-col flex gap-8 items-center justify-center">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-6">
            <Input
              label="Titre du gif :"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <Input
              label="URL du gif :"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Input
              label="Ajouter un fichier :"
              type="file"
              name="image"
              id="imageFile"
              accept="image/png, image/jpeg, image/jpg, image/gif"
              onChange={handleUpload}
            />
          </div>

          <Button
            type="submit"
            primary
            label="Poster mon gif 🎉"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};

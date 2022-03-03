import Navbar from '../components/Navbar';
import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import dbService from '../services/dbService';
import { useAuth } from '../contexts/Auth/useAuth';
import Button from '../components/Button';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';

export const PostGif = () => {
  const auth = useAuth();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState('');
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    // Form validation
    if (auth) {
      const token = auth.authHeader();
      if (file) {
        dbService
          .postGif(auth.currentUser.userId, title, token, undefined, file)
          .then(() => history.push('/home'))
          .catch((error) => console.log(error));
      } else {
        dbService
          .postGif(auth.currentUser.userId, title, token, url)
          .then(() => history.push('/home'))
          .catch((error) => console.log(error));
      }
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
        <form
          className="bg-white border-gray border mx-3 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <h2 className="mb-8 text-3xl font-semibold text-primary">
            Poster un gif
          </h2>
          <div className="mb-6">
            <Input
              label="Titre du gif :"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required={{ value: true, message: 'Titre requis' }}
              register={register}
              name="title"
            />
          </div>
          <div className="mb-6">
            <Input
              label="URL du gif :"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              register={register}
              name="url"
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
              register={register}
            />
          </div>

          <Button type="submit" primary label="Poster mon gif 🎉" />
        </form>
      </div>
    </>
  );
};

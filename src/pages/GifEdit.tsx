import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../contexts/Auth/useAuth';
import dbService from '../services/dbService';
import { useGif } from '../hooks/useGif';
import { useForm } from 'react-hook-form';

export const GifEdit = () => {
  const auth = useAuth();
  const { id } = useParams<Record<string, string>>();
  const { gif } = useGif(id);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState('');
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (gif && auth) {
      if (gif.userId !== auth.currentUser.userId) {
        history.push('/home');
      }
    }
  });

  useEffect(() => {
    if (gif) {
      setTitle(gif.title);
    }
  }, [gif]);

  const onSubmit = () => {
    // Form validation
    if (auth) {
      const token = auth.authHeader();
      if (title) {
        if (file) {
          dbService
            .updateGif(
              auth.currentUser.userId,
              id,
              title,
              token,
              undefined,
              file,
            )
            .then(() => history.push('/home'))
            .catch((error) => console.log(error));
        } else {
          console.log('no file');
          dbService
            .updateGif(auth.currentUser.userId, id, title, token, url)
            .then(() => history.push('/home'))
            .catch((error) => console.log(error));
        }
      }
    }
  };

  const handleDelete = () => {
    if (auth && gif) {
      if (auth.currentUser.userId === gif.userId) {
        dbService
          .deleteGif(gif.id, auth.authHeader())
          .then(() => history.push('/home'))
          .catch((error) => console.log(error));
      } else {
        console.log('Current user ID and gif user ID does not match');
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
      <div className="m-3 mt-8 flex-col flex w-1/3 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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

          <div className="flex gap-8">
            <Button type="submit" primary label="Modifier mon gif 🎉" />
            <Button
              secondary
              label="Supprimer mon gif ⚠️"
              onClick={handleDelete}
            />
          </div>
        </form>
      </div>
    </>
  );
};

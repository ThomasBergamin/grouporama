import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import dbService from '../services/dbService';
import { useAuth } from '../contexts/Auth/useAuth';
import Button from '../components/Button';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import Alert from '../components/Alert';

interface IForm {
  image: FileList;
  url: string;
  title: string;
}

export const PostGif = () => {
  const auth = useAuth();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState('');
  const [errorText, setErrorText] = useState('');
  const history = useHistory();
  const { register, handleSubmit } = useForm<IForm>();

  const onSubmit = (data: { image: FileList; url: string; title: string }) => {
    if (data.image.length > 0 && data.url) {
      setErrorText('Vous ne pouvez pas envoyer un fichier et une url !');
    } else if (auth) {
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
    } else {
      setErrorText('Il faut être connecté pour poster un gif !');
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
      {errorText && (
        <div className="py-4 flex items-center justify-center -mb-32">
          <Alert text={errorText} onClose={() => setErrorText('')} />
        </div>
      )}
      <div
        style={{ marginTop: '40px' }}
        className="container md:mx-auto w-full -mt-32 md:-mt-16 h-screen flex align-middle justify-center items-center"
      >
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

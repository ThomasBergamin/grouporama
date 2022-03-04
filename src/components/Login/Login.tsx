import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/useAuth';
import Button from '../Button';
import Input from '../Input';
import Navbar from '../Navbar/Navbar';
import { MdAlternateEmail } from 'react-icons/md';
import { BiLockAlt } from 'react-icons/bi';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ILoginInput {
  email: string;
  password: string;
}

const Login = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    setError,
  } = useForm<ILoginInput>();

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    if (auth) {
      auth
        .login(data.email, data.password)
        .then((response) => {
          if (response.status === '200') {
            console.log('Authentified');
          }
        })
        .catch((error) => {
          if (error.data.error === 'Mot de passe incorrect !') {
            setError('password', { message: 'Mot de passe incorrect !' });
          }
          if (error.data.error === 'Utilisateur non trouvé !') {
            setError('email', {
              message: 'Utilisateur non trouvé avec cet email !',
            });
          }
        });
    }
  };

  if (auth && auth.currentUser.isLoggedIn) return <Redirect to="/home" />;

  return (
    <>
      <Navbar />

      <div className="container md:mx-auto w-full -mt-32 md:-mt-16 h-screen flex align-middle justify-center items-center">
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border-gray border mx-3 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="mb-8 text-3xl font-semibold text-primary">
            Bienvenue sur Groupomania
          </h2>
          <div className="mb-6">
            <Input
              type="email"
              label="Ton email :"
              placeholder="xxx@email.com"
              leftIcon={<MdAlternateEmail />}
              required={{ value: true, message: 'Email requis' }}
              register={register}
              minLength={{ value: 4, message: 'Au moins 4 caractères' }}
              pattern={{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "L'email n'a pas le bon format",
              }}
              name="email"
              error={errors.email}
            />
          </div>
          <div className="mb-6">
            <Input
              label="Ton mot de passe :"
              name="password"
              placeholder="*******"
              type="password"
              minLength={{ value: 4, message: 'Au moins 4 caractères' }}
              leftIcon={<BiLockAlt />}
              required={{ value: true, message: 'Mot de passe requis' }}
              register={register}
              error={errors.password}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              disabled={!isDirty}
              type="submit"
              primary
              label="Se connecter"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

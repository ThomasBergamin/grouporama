import React, { useEffect, useState } from 'react';
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
  const [className, setClassName] = useState(
    'shadow border-transparent appearance-none border-2 rounded w-full py-2 px-9 placeholder-darkGray leading-tight focus:outline-none focus:shadow-outline',
  );

  useEffect(() => {
    if (errors.password) {
      setClassName(className.replace('border-transparent', 'border-red-500 '));
    } else {
      setClassName(className.replace('border-red-500', 'border-transparent'));
    }
  }, [errors.password]);

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

      <div
        style={{ marginTop: '64pxS' }}
        className="container md:mx-auto w-full md:-mt-4 h-screen flex align-middle justify-center items-center"
      >
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
            <>
              <label className="block text-primary text-sm font-bold mb-2">
                Ton mot de passe :
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3">{<BiLockAlt />}</div>

                <input
                  {...register('password', {
                    required: { value: true, message: 'Mot de passe requis' },
                    minLength: { value: 4, message: 'Au moins 4 caractères' },
                  })}
                  name="password"
                  placeholder="*******"
                  type="password"
                  className={className}
                />
                {errors.password && (
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </>
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

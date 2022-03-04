import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiLockAlt } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/useAuth';
import Button from '../Button';
import Input from '../Input';
import Navbar from '../Navbar/Navbar';

interface IRegisterInput {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
}

const Register = () => {
  const history = useHistory();
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    setError,
  } = useForm<IRegisterInput>();

  const onSubmit: SubmitHandler<IRegisterInput> = (data) => {
    if (auth) {
      auth
        .register(data.lastName, data.firstName, data.email, data.password)
        .then((response) => {
          if (response.status == '200') {
            history.push('/login');
          }
        })
        .catch((error: any) => {
          if (error.data.error.name === 'SequelizeUniqueConstraintError') {
            setError('email', {
              message: 'Un utilisateur est déjà inscrit avec ce mail !',
            });
          }
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container md:mx-auto w-full -mt-16 h-screen flex align-middle justify-center items-center">
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border-gray border mx-3 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="mb-8 text-3xl font-semibold text-primary">
            Crée ton compte Groupomania
          </h2>
          <div className="mb-6">
            <Input
              placeholder="John"
              label="Ton prénom :"
              type="text"
              leftIcon={<BsFillPersonFill />}
              required={{ value: true, message: 'Prénom requis' }}
              minLength={{ value: 2, message: 'Au moins 2 caractères requuis' }}
              register={register}
              name="firstName"
              error={errors.firstName}
            />
          </div>

          <div className="mb-6">
            <Input
              label="Ton nom de famille :"
              placeholder="Doe"
              type="text"
              minLength={{ value: 2, message: 'Au moins 2 caractères requuis' }}
              leftIcon={<BsFillPersonFill />}
              required={{ value: true, message: 'Nom requis' }}
              register={register}
              name="lastName"
              error={errors.lastName}
            />
          </div>

          <div className="mb-6">
            <Input
              label="Ton email :"
              placeholder="mon_email@email.com"
              type="email"
              leftIcon={<MdAlternateEmail />}
              pattern={{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "L'email n'a pas le bon format",
              }}
              required={{ value: true, message: 'Email requis' }}
              minLength={{ value: 4, message: 'Au moins 4 caractères' }}
              register={register}
              name="email"
              error={errors.email}
            />
          </div>

          <div className="mb-6">
            <Input
              placeholder="******"
              label="Ton mot de passe :"
              type="password"
              leftIcon={<BiLockAlt />}
              required={{ value: true, message: 'Mot de passe requis' }}
              pattern={{
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                message:
                  'Au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial',
              }}
              minLength={{
                value: 8,
                message:
                  'Le mot de passe doit être compris entre 8 et 20 caractères',
              }}
              maxLength={{
                value: 20,
                message:
                  'Le mot de passe doit être compris entre 8 et 20 caractères',
              }}
              register={register}
              name="password"
              error={errors.password}
            />
          </div>

          <Button
            disabled={!isDirty}
            type="submit"
            primary
            label="S'inscrire"
          />
        </form>
      </div>
    </>
  );
};

export default Register;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiLockAlt } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/useAuth';
import Button from '../Button';
import Input from '../Input';
import Navbar from '../Navbar/Navbar';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const auth = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    // validation du formulaire
    if (auth) {
      auth
        .register(lastName, firstName, email, password)
        .then(() => {
          history.push('/home');
        })
        .catch((error: Error) => console.log(error));
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-3 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/12"
        >
          <div className="mb-6">
            <Input
              placeholder="John"
              label="Ton prénom :"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              leftIcon={<BsFillPersonFill />}
              required={{ value: true, message: 'Prénom requis' }}
              register={register}
              name="surname"
            />
          </div>

          <div className="mb-6">
            <Input
              label="Ton nom de famille :"
              placeholder="Doe"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              leftIcon={<BsFillPersonFill />}
              required={{ value: true, message: 'Nom requis' }}
              register={register}
              name="name"
            />
          </div>

          <div className="mb-6">
            <Input
              label="Ton email :"
              placeholder="mon_email@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<MdAlternateEmail />}
              required={{ value: true, message: 'Email requis' }}
              register={register}
              name="email"
            />
          </div>

          <div className="mb-6">
            <Input
              placeholder="******"
              label="Ton mot de passe :"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<BiLockAlt />}
              required={{ value: true, message: 'Mot de passe requis' }}
              register={register}
              name="password"
            />
          </div>

          <Button type="submit" primary label="Submit" />
        </form>
      </div>
    </>
  );
};

export default Register;

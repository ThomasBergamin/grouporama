import axios, { AxiosResponse } from 'axios';
import React, { createContext, ReactNode, useState } from 'react';

export interface IAuth {
  isLoggedIn: boolean;
  token: string;
  userId: string;
}

interface IAuthContext {
  currentUser: IAuth;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  register: (
    lastName: string,
    firstName: string,
    email: string,
    password: string,
  ) => Promise<AxiosResponse<any, any>>;
  authHeader: () => {
    Authorization: string;
  };
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<IAuth>({
    isLoggedIn: false,
    token: '',
    userId: '',
  });

  const API_URL = 'http://localhost:3001/api/auth/';

  const login = async (email: string, password: string) => {
    const response = await axios.post(API_URL + 'login', {
      email,
      password,
    });
    if (response.data.token) {
      setCurrentUser({ ...response.data, isLoggedIn: true });
    }
    return response.data;
  };

  const logout = () => {
    setCurrentUser({
      isLoggedIn: false,
      token: '',
      userId: '',
    });
  };

  const register = (
    lastName: string,
    firstName: string,
    email: string,
    password: string,
  ) => {
    return axios.post(API_URL + 'signup', {
      lastName,
      firstName,
      email,
      password,
    });
  };

  const authHeader = () => {
    if (currentUser.token) {
      return { Authorization: 'Token ' + currentUser.token };
    } else {
      return { Authorization: 'no token' };
    }
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, register, authHeader }}
    >
      {children}
    </AuthContext.Provider>
  );
};

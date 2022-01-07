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
  ) => Promise<any>;
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
  const [currentUser, setCurrentUser] = useState<IAuth>(
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens') || '')
      : {
          isLoggedIn: false,
          token: '',
          userId: '',
        },
  );

  const API_URL = 'http://localhost:3001/api/auth/';

  const login = async (email: string, password: string) => {
    return await axios
      .post(API_URL + 'login', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          setCurrentUser({ ...response.data, isLoggedIn: true });
          localStorage.setItem(
            'authTokens',
            JSON.stringify({
              ...response.data,
              isLoggedIn: true,
            }),
          );
          return response;
        }
      })
      .catch((error) => {
        throw error.response;
      });
  };

  const logout = () => {
    localStorage.removeItem('authTokens');
    setCurrentUser({
      isLoggedIn: false,
      token: '',
      userId: '',
    });
  };

  const register = async (
    lastName: string,
    firstName: string,
    email: string,
    password: string,
  ) => {
    return await axios
      .post(API_URL + 'signup', {
        lastName,
        firstName,
        email,
        password,
      })
      .then((response) => response)
      .catch((error) => {
        throw error.response;
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

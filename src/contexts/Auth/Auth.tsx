import React, { createContext, ReactNode, useEffect, useState } from 'react';
import authService from '../../services/authService';

export interface IAuth {
  isLoggedIn: boolean;
  token: string;
  userId: string;
}

export const AuthContext = createContext<IAuth>({
  isLoggedIn: false,
  token: '',
  userId: '',
});

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

  const checkUserData = () => {
    console.log('Checking User Data');
    const user = authService.getCurrentUser();

    if (user && user.token) {
      setCurrentUser({
        isLoggedIn: true,
        token: user.token,
        userId: user.userId,
      });
    } else {
      setCurrentUser({
        isLoggedIn: false,
        token: '',
        userId: '',
      });
    }
  };

  useEffect(() => {
    checkUserData();
  }, []);

  useEffect(() => {
    window.addEventListener('storage', checkUserData);

    return () => {
      window.removeEventListener('storage', checkUserData);
    };
  }, []); //listener sur le local Storage

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

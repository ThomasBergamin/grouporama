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

  useEffect(() => {
    console.log('useEffect triggered');
    function checkUserData() {
      console.log('checkUserData triggered');
      const user = authService.getCurrentUser();

      if (user && user.token) {
        console.log('user Logged In triggered');
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
    }

    window.addEventListener('storage', checkUserData);

    return () => {
      window.removeEventListener('storage', checkUserData);
    };
  }); //listener sur le local Storage

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

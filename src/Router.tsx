import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { Home } from './pages/Home';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import { useAuth } from './contexts/Auth/useAuth';
import { GifDetail } from './pages/GifDetail';
import { PostGif } from './pages/PostGif';

const AuthenticatedRoute = ({ ...props }: RouteProps) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
};

const UnauthenticatedRoute = ({ ...props }: RouteProps) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) return <Redirect to="/home" />;

  return <Route {...props} />;
};

export const Router = () => {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/home" component={Home} />
      <AuthenticatedRoute exact path="/post" component={PostGif} />
      <AuthenticatedRoute exact path="/gifs/:id" component={GifDetail} />
      <UnauthenticatedRoute exact path="/login" component={Login} />
      <UnauthenticatedRoute exact path="/register" component={Register} />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

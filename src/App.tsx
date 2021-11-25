import React from 'react';
import { Home } from './pages/Home';
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './contexts/Auth/Auth';
import { useAuth } from './contexts/Auth/useAuth';

const AuthenticatedRoute = ({ ...props }: RouteProps) => {
  const auth = useAuth();

  if (!auth.isLoggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
};

const Router = () => {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Redirect from="*" to="/home" />
    </Switch>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <React.StrictMode>
          <Router />
        </React.StrictMode>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

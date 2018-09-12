import React from 'react';
import LandingContainer from './landing/landing_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignUpFormContainer from './session_form/signup_form_container.jsx';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/" component={LandingContainer} />
      </Switch>
    </div>
  );
};

export default App;

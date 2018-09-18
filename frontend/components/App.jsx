import React from 'react';
import LandingContainer from './landing/landing_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignUpFormContainer from './session_form/signup_form_container.jsx';
import LoginForm2 from './session_form/login_form_2.jsx';
import NoteShowContainer from './notes/note_show_container.jsx';
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
        <AuthRoute path='/login2' component={LoginForm2}/>
        <AuthRoute path="/login1" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
      </Switch>
      <ProtectedRoute path="/" component={LandingContainer} />
      <ProtectedRoute path="/notes/:note_id" component={NoteShowContainer} />
    </div>
  );
};

export default App;

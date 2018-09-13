import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, getUsers, receiveErrors, receiveNoErrors } from '../../actions/session_actions';
import LoginForm1 from './login_form_1.jsx';

const mapStateToProps = ({ errors, entities }) => {
  return {
    errors: Array.from(errors.session),
    formType: 'login',
    // navLink: <Link to="/signup">Create account</Link>,
    users: entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    getUsers: () => dispatch(getUsers()),
    receiveErrors: (error)  => dispatch(receiveErrors(error)),
    receiveNoErrors: () => dispatch(receiveNoErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm1);

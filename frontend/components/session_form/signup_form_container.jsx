import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, receiveErrors, receiveNoErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    formTypeHTML: <h1>Sign Up</h1>,
    // navLink: <Link to="/login">Sign in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: (error)  => dispatch(receiveErrors(error)),
    receiveNoErrors: () => dispatch(receiveNoErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

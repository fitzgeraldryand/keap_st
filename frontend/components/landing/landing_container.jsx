import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Landing from './landing';

const currentEmail = (state) => {
  const userObj = state.entities.users[state.session.id];
  return userObj.email;
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id,
    currentEmail: currentEmail(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { return dispatch(logout()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {Landing} from './landing';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { return dispatch(logout()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

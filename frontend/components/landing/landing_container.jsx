import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchNotes } from '../../actions/note_actions';
import Landing from './landing';
import * as LabelActions from '../../actions/label_actions';

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
    logout: () => { return dispatch(logout()); },
    fetchNotes: () => { return dispatch(fetchNotes()); },
    getLabels: () => { return dispatch(LabelActions.getLabels()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

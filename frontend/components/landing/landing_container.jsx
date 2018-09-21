import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchNotes } from '../../actions/note_actions';
import Landing from './landing';
import * as LabelActions from '../../actions/label_actions';
import { updateFilter } from '../../actions/filter_actions.jsx';

const currentEmail = (state) => {
  const userObj = state.entities.users[state.session.id];
  return userObj.email;
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id,
    currentEmail: currentEmail(state),
    filters: state.ui.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { return dispatch(logout()); },
    fetchNotes: (filter, value) => { return dispatch(fetchNotes(filter, value)); },
    getLabels: () => { return dispatch(LabelActions.getLabels()); },
    updateFilter: (filter, value) => { return dispatch(updateFilter(filter, value)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

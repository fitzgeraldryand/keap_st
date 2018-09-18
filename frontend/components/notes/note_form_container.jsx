import React from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/note_actions';
import NoteForm from './note_form';
import { selectSortedAllNotes } from '../../reducers/selectors.js';

const mapStateToProps = (state) => {
  return {
    notes: selectSortedAllNotes(state),
    currentUser: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => { return dispatch(createNote(note)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

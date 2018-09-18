import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote, updateNote } from '../../actions/note_actions';
import { selectSortedAllNotes } from '../../reducers/selectors.js';
import NoteIndex from './note_index';

const mapStateToProps = (state) => {
  return {
    notes: selectSortedAllNotes(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => { return dispatch(fetchNotes()); },
    deleteNote: (id) => { return dispatch(deleteNote(id)); },
    updateNote: (id) => { return dispatch(updateNote(id)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);

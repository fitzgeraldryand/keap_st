import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote, updateNote } from '../../actions/note_actions';
import { addHiddenNote } from '../../actions/ui_actions';
import { selectSortedAllNotes } from '../../reducers/selectors.js';
import NoteIndex from './note_index';

const mapStateToProps = (state) => {
  return {
    notes: selectSortedAllNotes(state),
    hiddenNote: state.ui.hiddenNoteId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => { return dispatch(fetchNotes()); },
    deleteNote: (id) => { return dispatch(deleteNote(id)); },
    updateNote: (id) => { return dispatch(updateNote(id)); },
    addHiddenNote: (id) => { return dispatch(addHiddenNote(id));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);

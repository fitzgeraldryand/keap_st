import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote, updateNote } from '../../actions/note_actions';
import { deleteHiddenNote } from '../../actions/ui_actions';
import { selectSortedAllNotes } from '../../reducers/selectors.js';
import NoteShow from './note_show.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.entities.notes[ownProps.match.params.note_id] || {},
    hiddenNote: state.ui.hiddenNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNote: (id) => { return dispatch(fetchNote(id)); },
    deleteNote: (id) => { return dispatch(deleteNote(id)); },
    updateNote: (id) => { return dispatch(updateNote(id)); },
    deleteHiddenNote: () => { return dispatch(deleteHiddenNote());}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);

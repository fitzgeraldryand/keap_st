import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote, updateNote } from '../../actions/note_actions';
import { addHiddenNote } from '../../actions/ui_actions';
import { selectSortedAllNotes, selectSortedAllLabels } from '../../reducers/selectors.js';
import NoteIndex from './note_index';
import {createLabelling, deleteLabelling} from '../../actions/labelling_actions';

const mapStateToProps = (state) => {
  return {
    notes: selectSortedAllNotes(state),
    labels: selectSortedAllLabels(state),
    hiddenNote: state.ui.hiddenNoteId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => { return dispatch(fetchNotes()); },
    fetchNote: (id) => { return dispatch(fetchNote(id)); },
    deleteNote: (id) => { return dispatch(deleteNote(id)); },
    updateNote: (id) => { return dispatch(updateNote(id)); },
    addHiddenNote: (id) => { return dispatch(addHiddenNote(id));},
    createLabelling: (labelling) => { return dispatch(createLabelling(labelling));},
    deleteLabelling: (labelling) => { return dispatch(deleteLabelling(labelling));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);

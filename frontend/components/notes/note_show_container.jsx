import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote, updateNote } from '../../actions/note_actions';
import { deleteHiddenNote } from '../../actions/ui_actions';
import { selectSortedAllNotes, selectSortedAllLabels } from '../../reducers/selectors.js';
import NoteShow from './note_show.jsx';
import {createLabelling, deleteLabelling} from '../../actions/labelling_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    labels: selectSortedAllLabels(state) || [],
    note: state.entities.notes[ownProps.match.params.note_id] || {},
    hiddenNote: state.ui.hiddenNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNote: (id) => { return dispatch(fetchNote(id)); },
    deleteNote: (id) => { return dispatch(deleteNote(id)); },
    updateNote: (id) => { return dispatch(updateNote(id)); },
    deleteHiddenNote: () => { return dispatch(deleteHiddenNote());},
    createLabelling: (labelling) => { return dispatch(createLabelling(labelling));},
    deleteLabelling: (labelling) => { return dispatch(deleteLabelling(labelling));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);

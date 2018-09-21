import React from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/note_actions';
import NoteForm from './note_form';
import { selectSortedAllNotes, selectSortedAllLabels } from '../../reducers/selectors.js';
import {createLabelling, deleteLabelling} from '../../actions/labelling_actions';

const mapStateToProps = (state) => {
  return {
    notes: selectSortedAllNotes(state) || { label_ids: [] },
    labels: selectSortedAllLabels(state) || [],
    labelsObj: state.entities.notes || {},
    currentUser: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => { return dispatch(createNote(note)); },
    createLabelling: (labelling) => { return dispatch(createLabelling(labelling));},
    deleteLabelling: (labelling) => { return dispatch(deleteLabelling(labelling));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

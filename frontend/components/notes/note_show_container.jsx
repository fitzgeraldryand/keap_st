import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote, updateNote } from '../../actions/note_actions';
import { deleteHiddenNote } from '../../actions/ui_actions';
import { selectSortedAllNotes, selectSortedAllLabels } from '../../reducers/selectors.js';
import NoteShow from './note_show.jsx';
import {createLabelling, deleteLabelling} from '../../actions/labelling_actions';
import { getLabels } from '../../actions/label_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    labels: selectSortedAllLabels(state) || [],
    labelsObj: state.entities.labels || {},
    note: state.entities.notes[ownProps.match.params.note_id] || { label_ids: [], collaborator_emails: [] },
    hiddenNote: state.ui.hiddenNote,
    currentUser: state.session,
    users: state.entities.users || {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNote: (id) => { return dispatch(fetchNote(id)); },
    getLabels: () => { return dispatch(getLabels()); },
    deleteNote: (id) => { return dispatch(deleteNote(id)); },
    updateNote: (id) => { return dispatch(updateNote(id)); },
    deleteHiddenNote: () => { return dispatch(deleteHiddenNote());},
    createLabelling: (labelling) => { return dispatch(createLabelling(labelling));},
    deleteLabelling: (labelling) => { return dispatch(deleteLabelling(labelling));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);

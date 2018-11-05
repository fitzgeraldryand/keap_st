import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote, updateNote } from '../../actions/note_actions';
import { addHiddenNote } from '../../actions/ui_actions';
import { selectSortedAllNotes, selectSortedAllLabels, selectSortedPinnedNotes, selectSortedUnpinnedNotes } from '../../reducers/selectors.js';
import NoteIndex from './note_index';
import {createLabelling, deleteLabelling} from '../../actions/labelling_actions';
import {updateFilter} from '../../actions/filter_actions';
import {getLabels} from '../../actions/label_actions';

const mapStateToProps = (state) => {
  return {
    notes: selectSortedAllNotes(state) || { label_ids: [], collaborator_emails: [] },
    unpinnedNotes: selectSortedUnpinnedNotes(state) || { label_ids: [] },
    pinnedNotes: selectSortedPinnedNotes(state) || { label_ids: [] },
    labels: selectSortedAllLabels(state) || [],
    labelsObj: state.entities.labels || {},
    hiddenNote: state.ui.hiddenUser.hiddenNoteId,
    currentUser: state.session,
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLabels: () => { return dispatch(getLabels()); },
    fetchNotes: () => { return dispatch(fetchNotes()); },
    fetchNote: (id) => { return dispatch(fetchNote(id)); },
    deleteNote: (id) => { return dispatch(deleteNote(id)); },
    updateNote: (id) => { return dispatch(updateNote(id)); },
    addHiddenNote: (id) => { return dispatch(addHiddenNote(id));},
    createLabelling: (labelling) => { return dispatch(createLabelling(labelling));},
    deleteLabelling: (labelling) => { return dispatch(deleteLabelling(labelling));},
    updateFilter: (filter,value) => { return dispatch(updateFilter(filter,value));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);

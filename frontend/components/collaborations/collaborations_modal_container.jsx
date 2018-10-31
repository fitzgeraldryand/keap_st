import React from 'react';
import { connect } from 'react-redux';
import { fetchNote, updateNote } from '../../actions/note_actions';
import { addHiddenNote } from '../../actions/ui_actions';
import { getUsers } from '../../actions/session_actions';
import CollaborationsModal from './collaborations_modal.jsx';
import {
  receiveCollaborationErrors,
  receiveNoCollaborationErrors,
  createCollaboration,
  deleteCollaboration
} from '../../actions/collaboration_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users || [],
    note: state.entities.notes[ownProps.match.params.note_id] || { collaborator_emails: [] },
    hiddenNote: state.ui.hiddenUser.hiddenNote,
    errors: Array.from(state.errors.collaboration)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNote: (id) => { return dispatch(fetchNote(id)); },
    createCollaboration: (collaboration) => { return dispatch(createCollaboration(collaboration)); },
    deleteCollaboration: (collaboration) => { return dispatch(deleteCollaboration(collaboration)); },
    addHiddenNote: () => { return dispatch(deleteHiddenNote());},
    getUsers: () => { return dispatch(getUsers()); },
    receiveCollaborationErrors: (error)  => dispatch(receiveCollaborationErrors(error)),
    receiveNoCollaborationErrors: () => dispatch(receiveNoCollaborationErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollaborationsModal);

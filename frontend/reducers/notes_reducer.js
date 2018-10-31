import merge from 'lodash/merge';

import { RECEIVE_NOTE, RECEIVE_ALL_NOTES, REMOVE_NOTE } from '../actions/note_actions';
import { RECEIVE_COLLABORATION, REMOVE_COLLABORATION } from '../actions/collaboration_actions';
import { RECEIVE_LABELLING, REMOVE_LABELLING } from '../actions/labelling_actions';

import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTE:
      return merge({}, state, { [action.note.id]: action.note });
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case REMOVE_NOTE:
      let newState = merge({}, state);
      delete newState[action.noteId];
      return newState;
    case RECEIVE_LABELLING:
      let newState2 = merge({}, state);
      newState2[action.labelling.note_id].label_ids.push(action.labelling.label_id);
      return newState2;
    case REMOVE_LABELLING:
      let newState3 = merge({}, state);
      let labelIndex = newState3[action.labelling.note_id].label_ids.indexOf(action.labelling.label_id);
      newState3[action.labelling.note_id].label_ids.splice(labelIndex, 1);
      return newState3;
    case RECEIVE_COLLABORATION:
      let newState4 = merge({}, state);
      newState4[action.collaboration.note_id].collaborator_emails.push(action.collaboration.collaborator_email);
      return newState4;
    case REMOVE_COLLABORATION:
      let newState5 = merge({}, state);
      let collaborationIndex = newState5[action.collaboration.note_id].collaborator_emails.indexOf(action.collaboration.collaborator_email);
      newState5[action.collaboration.note_id].collaborator_emails.splice(collaborationIndex, 1);
      return newState5;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default notesReducer;

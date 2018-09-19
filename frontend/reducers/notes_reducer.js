import merge from 'lodash/merge';

import { RECEIVE_NOTE, RECEIVE_ALL_NOTES, REMOVE_NOTE } from '../actions/note_actions';
import { RECEIVE_LABELLING, REMOVE_LABELLING } from '../actions/labelling_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTE:
      return merge({}, state, { [action.note.id]: action.note });
    case RECEIVE_ALL_NOTES:
      return merge({}, state, action.notes);
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
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default notesReducer;

import merge from 'lodash/merge';

import { RECEIVE_NOTE, RECEIVE_ALL_NOTES, REMOVE_NOTE } from '../actions/note_actions';

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
    default:
      return state;
  }
};

export default notesReducer;

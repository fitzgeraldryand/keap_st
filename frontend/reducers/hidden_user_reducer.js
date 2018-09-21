import {RECEIVE_HIDDEN_NOTE, REMOVE_CURRENT_HIDDEN_NOTE} from '../actions/ui_actions.jsx';

const _nullNote = Object.freeze({
  hiddenNoteId: null
});

const hiddenUserReducer = (state = _nullNote, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HIDDEN_NOTE:
      return { hiddenNoteId: action.id };
    case REMOVE_CURRENT_HIDDEN_NOTE:
      return _nullNote;
    default:
      return state;
  }
};

export default hiddenUserReducer;

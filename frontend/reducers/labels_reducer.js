import merge from 'lodash/merge';

import { RECEIVE_LABEL, RECEIVE_ALL_LABELS, REMOVE_LABEL } from '../actions/label_actions';
import { RECEIVE_LABELLING, REMOVE_LABELLING } from '../actions/labelling_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const labelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LABEL:
      return merge({}, state, { [action.label.id]: action.label });
    case RECEIVE_ALL_LABELS:
      return merge({}, state, action.labels);
    case REMOVE_LABEL:
      let newState = merge({}, state);
      delete newState[action.labelId];
      return newState;
    case RECEIVE_LABELLING:
      let newState2 = merge({}, state);
      newState2[action.labelling.label_id].note_ids.push(action.labelling.note_id);
      return newState2;
    case REMOVE_LABELLING:
      let newState3 = merge({}, state);
      let noteIndex = newState3[action.labelling.label_id].note_ids.indexOf(action.labelling.note_id);
      newState3[action.labelling.label_id].note_ids.splice(noteIndex, 1);
      return newState3;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default labelsReducer;

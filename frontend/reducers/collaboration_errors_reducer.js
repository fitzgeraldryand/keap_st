import {
  RECEIVE_COLLABORATION_ERRORS,
  RECEIVE_NO_COLLABORATION_ERRORS
} from '../actions/collaboration_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NO_COLLABORATION_ERRORS:
      return [];
    case RECEIVE_COLLABORATION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

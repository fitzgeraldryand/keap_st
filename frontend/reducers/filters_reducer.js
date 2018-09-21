import merge from 'lodash/merge';

import { UPDATE_FILTER, REMOVE_FILTER } from '../actions/filter_actions';
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultFilters = Object.freeze({
  label_id: -1,
  text: ""
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else if (action.type === LOGOUT_CURRENT_USER) {
      return defaultFilters;
  } else if (action.type === RECEIVE_CURRENT_USER) {
      return defaultFilters;
  } else {
      return state;
    }
};

export default filtersReducer;

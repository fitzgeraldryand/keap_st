import merge from 'lodash/merge';

import { UPDATE_FILTER, REMOVE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  label_id: -1
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else if (action.type === REMOVE_FILTER) {
    const newFilter2 = merge({}, state);
    return merge(newFilter2, {[action.filter]: defaultFilters[action.filter]});
  }
    else {
      return state;
    }
};

export default filtersReducer;

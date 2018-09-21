import { fetchNotes } from './note_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter
});

export const updateFilter = (filter, value) => (dispatch) => {
  dispatch(changeFilter(filter, value));
  return fetchNotes(filter, value)(dispatch);
};

export const deleteFilter = (filter) => (dispatch, getState) => {
  dispatch(removeFilter(filter));
  return fetchNotes(filter)(dispatch);
};

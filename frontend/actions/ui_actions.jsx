export const RECEIVE_HIDDEN_NOTE = 'RECEIVE_HIDDEN_NOTE';
export const REMOVE_CURRENT_HIDDEN_NOTE = 'REMOVE_CURRENT_HIDDEN_NOTE';

const receiveHiddenNote = id => ({
  type: RECEIVE_HIDDEN_NOTE,
  id
});

const removeCurrentHiddenNote = () => ({
  type: REMOVE_CURRENT_HIDDEN_NOTE
});

export const addHiddenNote = (id) => dispatch => (
  dispatch(receiveHiddenNote(id))
);

export const deleteHiddenNote = () => dispatch => (
  dispatch(removeCurrentHiddenNote())
);

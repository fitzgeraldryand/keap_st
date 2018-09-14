import { combineReducers } from 'redux';
// import benches from './benches_reducer';
// import reviews from './reviews_reducer';
import usersReducer from './users_reducer';
import notesReducer from './notes_reducer';

export default combineReducers({
  users: usersReducer,
  notes: notesReducer
});

import { combineReducers } from 'redux';
// import benches from './benches_reducer';
// import reviews from './reviews_reducer';
import hiddenUserReducer from './hidden_user_reducer';
import filtersReducer from './filters_reducer';

export default combineReducers({
  hiddenUser: hiddenUserReducer,
  filters: filtersReducer
});

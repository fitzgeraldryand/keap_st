import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import collaboration from './collaboration_errors_reducer';

export default combineReducers({
  session,
  collaboration
});

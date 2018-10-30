// import merge from 'lodash/merge';
//
// import { RECEIVE_COLLABORATION, REMOVE_COLLABORATION } from '../actions/collaboration_actions';
// import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
//
// const labelsReducer = (state = {}, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case RECEIVE_COLLABORATION:
//       let newState = merge({}, state);
//       newState[action.labelling.label_id].note_ids.push(action.labelling.note_id);
//       return newState2;
//     case REMOVE_COLLABORATION:
//       let newState3 = merge({}, state);
//       let noteIndex = newState3[action.labelling.label_id].note_ids.indexOf(action.labelling.note_id);
//       newState3[action.labelling.label_id].note_ids.splice(noteIndex, 1);
//       return newState3;
//     case LOGOUT_CURRENT_USER:
//       return {};
//     default:
//       return state;
//   }
// };
//
// export default labelsReducer;

import * as CollaborationApiUtil from '../util/collaboration_api_util';

export const RECEIVE_COLLABORATION = "RECEIVE_COLLABORATION";
export const REMOVE_COLLABORATION = "REMOVE_COLLABORATION";

export const createCollaboration = collaboration => dispatch => (
  CollaborationApiUtil.createCollaboration(collaboration).then(collaboration => dispatch(receiveCollaboration(collaboration)))
);

export const deleteCollaboration = collaboration => dispatch => (
  CollaborationApiUtil.deleteCollaboration(collaboration).then(collaboration => dispatch(removeCollaboration(collaboration)))
);

const receiveCollaboration = collaboration => ({
  type: RECEIVE_COLLABORATION,
  collaboration
});

const removeCollaboration = collaboration => ({
  type: REMOVE_COLLABORATION,
  collaboration
});

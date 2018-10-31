import * as CollaborationApiUtil from '../util/collaboration_api_util';

export const RECEIVE_COLLABORATION = "RECEIVE_COLLABORATION";
export const REMOVE_COLLABORATION = "REMOVE_COLLABORATION";
export const RECEIVE_COLLABORATION_ERRORS = 'RECEIVE_COLLABORATION_ERRORS';
export const RECEIVE_NO_COLLABORATION_ERRORS = 'RECEIVE_NO_COLLABORATION_ERRORS';


export const createCollaboration = collaboration => dispatch => (
  CollaborationApiUtil.createCollaboration(collaboration).then(collaboration => dispatch(receiveCollaboration(collaboration)))
);

export const deleteCollaboration = collaboration => dispatch => (
  CollaborationApiUtil.deleteCollaboration(collaboration).then(collaboration => dispatch(removeCollaboration(collaboration)))
);

export const receiveNoCollaborationErrors = () => ({
  type: RECEIVE_NO_COLLABORATION_ERRORS
});

export const receiveCollaborationErrors = errors => ({
  type: RECEIVE_COLLABORATION_ERRORS,
  errors
});

const receiveCollaboration = collaboration => ({
  type: RECEIVE_COLLABORATION,
  collaboration
});

const removeCollaboration = collaboration => ({
  type: REMOVE_COLLABORATION,
  collaboration
});

import * as LabellingApiUtil from '../util/labelling_api_util';

export const RECEIVE_LABELLING = "RECEIVE_LABELLING";
export const REMOVE_LABELLING = "REMOVE_LABELLING";

export const createLabelling = labelling => dispatch => (
  LabellingApiUtil.createLabelling(labelling).then(labelling => dispatch(receiveLabelling(labelling)))
);

export const deleteLabelling = labelling => dispatch => (
  LabellingApiUtil.deleteLabelling(labelling).then(labelling => dispatch(removeLabelling(labelling)))
);

const receiveLabelling = labelling => ({
  type: RECEIVE_LABELLING,
  labelling
});

const removeLabelling = labelling => ({
  type: REMOVE_LABELLING,
  labelling
});

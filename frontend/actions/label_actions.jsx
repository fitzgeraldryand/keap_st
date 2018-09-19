import * as LabelApiUtil from '../util/label_api_util';

export const RECEIVE_ALL_LABELS = "RECEIVE_ALL_LABELS";
export const RECEIVE_LABEL = "RECEIVE_LABEL";
export const REMOVE_LABEL = "REMOVE_LABEL";

export const getLabels = () => dispatch => (
  LabelApiUtil.getLabels().then(labels => dispatch(receiveAllLabels(labels)))
);

export const createLabel = label => dispatch => (
  LabelApiUtil.createLabel(label).then(label => dispatch(receiveLabel(label)))
);

export const deleteLabel = labelId => dispatch => (
  LabelApiUtil.deleteLabel(labelId).then(label => dispatch(removeLabel(labelId)))
);

export const updateLabel = label => dispatch => (
  LabelApiUtil.updateLabel(label).then(label => dispatch(receiveLabel(label)))
);

const receiveAllLabels = labels => ({
  type: RECEIVE_ALL_LABELS,
  labels
});

const receiveLabel = label => ({
  type: RECEIVE_LABEL,
  label
});

const removeLabel = labelId => ({
  type: REMOVE_LABEL,
  labelId
});

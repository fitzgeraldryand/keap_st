import React from 'react';
import { connect } from 'react-redux';
import * as LabelActions from '../../actions/label_actions';
import LabelModal from './label_modal.jsx';
import { selectSortedAllLabels } from '../../reducers/selectors.js';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id,
    labels: selectSortedAllLabels(state) || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLabels: () => { return dispatch(LabelActions.getLabels()); },
    createLabel: (label) => { return dispatch(LabelActions.createLabel(label)); },
    updateLabel: (label) => { return dispatch(LabelActions.updateLabel(label)); },
    deleteLabel: (labelId) => { return dispatch(LabelActions.deleteLabel(labelId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LabelModal);

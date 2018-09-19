import React from 'react';
import { connect } from 'react-redux';
import * as LabelActions from '../../actions/label_actions';
import LabelIndex from './labels_index.jsx';
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
    updateLabels: () => { return dispatch(LabelActions.getLabels()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LabelIndex);

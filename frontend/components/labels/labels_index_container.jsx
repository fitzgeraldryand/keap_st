import React from 'react';
import { connect } from 'react-redux';
import * as LabelActions from '../../actions/label_actions';
import LabelIndex from './labels_index.jsx';
import { selectSortedAllLabels } from '../../reducers/selectors.js';
import { updateFilter, removeFilter } from '../../actions/filter_actions.jsx';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id,
    labels: selectSortedAllLabels(state) || [],
    filters: state.ui.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLabels: () => { return dispatch(LabelActions.getLabels()); },
    createLabel: (label) => { return dispatch(LabelActions.createLabel(label)); },
    updateLabels: () => { return dispatch(LabelActions.getLabels()); },
    updateFilter: (filter, value) => { return dispatch(updateFilter(filter, value)); },
    removeFilter: (value) => { return dispatch(removeFilter(filter)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LabelIndex);

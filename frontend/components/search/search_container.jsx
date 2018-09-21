import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions.jsx';
import Search from './search.jsx';

const mapStateToProps = (state) => {
  return {
    filters: state.ui.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filter, value) => { return dispatch(updateFilter(filter, value)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

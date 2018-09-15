import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/note_actions';
import { selectSortedAllNotes } from '../../reducers/selectors.js';
import NoteIndex from './note_index';

const mapStateToProps = (state) => {
  return {
    notes: selectSortedAllNotes(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => { return dispatch(fetchNotes()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);

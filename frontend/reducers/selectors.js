import _ from 'lodash';

export const selectSortedAllNotes = state => {
  const allNotes = _.values(state.entities.notes);
  const allSortedNotes = _.sortBy(allNotes, [function(note) { return note.tab_index; }]);
  return allSortedNotes.reverse();
};

export const selectSortedAllLabels = state => {
  const allLabels = _.values(state.entities.labels);
  return _.sortBy(allLabels, [function(label) { return label.name; }]);
};

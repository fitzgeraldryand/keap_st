import _ from 'lodash';

export const selectSortedAllNotes = state => {
  const allNotes = _.values(state.entities.notes);
  return (
    _.sortBy(allNotes, [function(note) { return note.tab_index; }])
  );
};

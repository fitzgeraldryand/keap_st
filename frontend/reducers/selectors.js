import values from 'lodash/values';

export const selectAllNotes = state => values(state.entities.notes);

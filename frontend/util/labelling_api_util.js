export const createLabelling = (labelling) => {
  return $.ajax({
    method: 'POST',
    url: '/api/labellings',
    data: {
      labelling: labelling
    }
  });
};

export const deleteLabelling = ({note_id, label_id}) => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/labellings',
    data: {
      note_id,
      label_id
    }
  });
};

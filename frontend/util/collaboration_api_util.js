export const createCollaboration = (collaboration) => {
  return $.ajax({
    method: 'POST',
    url: '/api/collaborations',
    data: {
      collaboration: collaboration
    }
  });
};

export const deleteCollaboration = ({note_id, collaborator_id}) => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/collaborations',
    data: {
      note_id,
      collaborator_id
    }
  });
};

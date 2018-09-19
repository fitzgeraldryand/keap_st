export const createLabel = (label) => {
  return $.ajax({
    method: 'POST',
    url: '/api/labels',
    data: {
      label: label
    }
  });
};

export const getLabels = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/labels'
  });
};

export const deleteLabel = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/labels/${id}`
  });
};

export const updateLabel = label => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/labels/${label.id}`,
    data: {
      label:label
    }
  });
};

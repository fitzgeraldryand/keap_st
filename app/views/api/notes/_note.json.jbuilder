json.extract! note, :id, :title, :body, :author_id, :color, :tab_index, :label_ids, :pinned, :created_at, :updated_at
json.collaborator_emails note.collaborator_emails

if note.photo.attached?
  json.photoUrl url_for(note.photo)
end

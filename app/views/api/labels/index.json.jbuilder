@labels.each do |label|
  json.set! label.id do
    json.extract! label, :id, :name, :note_ids
  end
end

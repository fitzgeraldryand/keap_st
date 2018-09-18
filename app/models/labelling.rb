class Label < ApplicationRecord
  validates :note_id, :label_id, presence: true

  belongs_to :label,
    primary_key: :id,
    foreign_key: :label_id,
    class_name: 'Label'

  belongs_to :note,
    primary_key: :id,
    foreign_key: :note_id,
    class_name: 'Note'
end

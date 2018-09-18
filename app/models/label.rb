class Label < ApplicationRecord
  validates :name, presence: true

  has_many :labellings,
    primary_key: :id,
    foreign_key: :label_id,
    class_name: 'Labelling'

  has_many :notes,
    through: :labellings,
    source: :note
end

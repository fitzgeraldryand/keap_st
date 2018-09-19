# == Schema Information
#
# Table name: labels
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  creator_id :string
#

class Label < ApplicationRecord
  validates :name, :creator_id, presence: true
  validates :name, uniqueness: {scope: :creator_id}

  has_many :labellings,
    primary_key: :id,
    foreign_key: :label_id,
    class_name: 'Labelling'

  has_many :notes,
    through: :labellings,
    source: :note

  belongs_to :user,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'User'
end

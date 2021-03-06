# == Schema Information
#
# Table name: labellings
#
#  id         :bigint(8)        not null, primary key
#  label_id   :integer          not null
#  note_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Labelling < ApplicationRecord
  validates :label_id, uniqueness: {scope: :note_id}

  belongs_to :label,
    primary_key: :id,
    foreign_key: :label_id,
    class_name: 'Label'

  belongs_to :note,
    primary_key: :id,
    foreign_key: :note_id,
    class_name: 'Note',
    inverse_of: :labellings
end

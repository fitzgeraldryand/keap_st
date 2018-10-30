# == Schema Information
#
# Table name: collaborations
#
#  id              :bigint(8)        not null, primary key
#  note_id         :integer          not null
#  collaborator_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Collaboration < ApplicationRecord

  belongs_to :note,
    primary_key: :id,
    foreign_key: :note_id,
    class_name: 'Note'

  belongs_to :collaborator,
    primary_key: :id,
    foreign_key: :collaborator_id,
    class_name: 'User'
end

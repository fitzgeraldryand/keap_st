# == Schema Information
#
# Table name: notes
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  title      :string
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  color      :string
#  tab_index  :integer
#  pinned     :boolean
#

class Note < ApplicationRecord
  validates :title, :author_id, :body, :color, :tab_index, presence: :true
  validates :tab_index, uniqueness: {scope: :author_id}

  COLORS = [
    '#cfd8dc',
    '#d7ccc8',
    '#f8bbd0',
    '#b388ff',
    '#82b1ff',
    '#80d8ff',
    '#a7feeb',
    '#ccfd90',
    '#fffd8d',
    '#ffd180',
    '#fe8a80',
    '#fafafa'
  ].sort.freeze

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
end

# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true

  has_many :notes,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Note'

  has_many :collaborations,
    primary_key: :id,
    foreign_key: :collaborator_id,
    class_name: 'Collaboration'

  has_many :collaborated_notes,
    through: :collaborations,
    source: :note

  has_many :labels,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'Label'

  has_many :sent_friendships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Friendship',
    dependent: :destroy

  has_many :received_friendships,
    primary_key: :id,
    foreign_key: :friend_id,
    class_name: 'Friendship',
    dependent: :destroy

  after_initialize :ensure_session_token
  attr_reader :password

  def friend_ids
    sent = self.sent_friendships.pluck(:friend_id)
    received = self.received_friendships.pluck(:user_id)
    friend_ids = sent + received
    return friend_ids
  end

  def self.find_by_credential(email,password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password= (password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    return self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end

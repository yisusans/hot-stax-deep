class User < ActiveRecord::Base
  validates :username, :password, :email, presence: true
  validates :email, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create

  has_secure_password

  has_many :votes
  has_many :answers
  has_many :questions
  has_many :comments
end

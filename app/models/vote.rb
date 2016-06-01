class Vote < ActiveRecord::Base
  belongs_to :user
  has_many :questions, as: :voteable
  has_many :answers, as: :voteable
end

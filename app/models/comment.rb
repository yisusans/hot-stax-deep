class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :answer, polymorphic: true
  belongs_to :question, polymorphic: true
end

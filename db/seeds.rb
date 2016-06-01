# require 'Faker'

User.delete_all
# Question.delete_all
# Answer.delete_all
# Comment.delete_all
# Vote.delete_all

users = 100.times.map do
  User.create!( :username => Faker::Internet.user_name,
                :email      => Faker::Internet.email,
                :password   => 'password' )
end

# questions = ["How do I write in java?",
#   "I keep getting the 400 error code in javascript. What should I do?", "How do I make my footer float to the bottom?", "Where should I put my mvc model?", "What is the best sinatra skeleton", "Who created Ruby?", ""]


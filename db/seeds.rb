User.delete_all
Question.delete_all
Answer.delete_all
Comment.delete_all
Vote.delete_all

users = 100.times.map do
  User.create!( :username => Faker::Internet.user_name,
                :email      => Faker::Internet.email,
                :password   => 'password' )
end

questions = 100.times.map do
  Question.create!(
    user_id: rand(1..100),
    title: Faker::Company.name,
    body: Faker::Company.catch_phrase
    )
end

answers = 100.times.map do
  Answer.create!(
    user_id: rand(1..100),
    question_id: rand(1..100),
    answer: Faker::Company.profession
    )
  end

comments_qs = 50.times.map do
  Comment.create!(
    user_id: rand(1..100),
    comment: Faker::Lorem.sentences,
    commentable_id: rand(1..100),
    commentable_type: "Question"
  )
end

comments_as = 50.times.map do
  Comment.create!(
    user_id: rand(1..100),
    comment: Faker::Lorem.sentences,
    commentable_id: rand(1..100),
    commentable_type: "Answer"
  )
end

votes_qs = 50.times.map do
  Vote.create!(
    user_id: rand(1..100),
    voteable_id: rand(1..100),
    voteable_type: "Question"
  )
end

votes_as = 50.times.map do
  Vote.create!(
    user_id: rand(1..100),
    voteable_id: rand(1..100),
    voteable_type: "Answer"
  )
end


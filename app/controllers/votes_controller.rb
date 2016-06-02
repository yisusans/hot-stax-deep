post '/questions/:id/votes' do
  question = Question.find_by(params[:id])
  vote = Vote.new(voteable_id: question.id, user_id: current_user.id, voteable_type: "Question" )
  # add logic to make sure person can only vote once
  # already_voted? = Vote.find_by( voteable_id: question.id, user_id: current_user.id)
  # create a method that validates in the vote class
  # throw an error - try to do it in js
  if vote.save?
    erb :"questions/show"
  end
end

post '/answers/:id/votes' do
  answer = Answer.find_by(params[:id])
  vote = Vote.new(voteable_type: "Answer", voteable_id: answer.id, user_id: current_user.id)

  if vote.save?
    erb :"questions/show"
  end

end

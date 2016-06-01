post '/questions/:id/votes' do
  question = Question.find_by(params[:id])
  vote = Vote.new(voteable_id: question.id, user_id: current_user.id, voteable_type: "Question" )
  if vote.save?
    erb :"votes/_question_votes"
  end
end

post '/answers/:id/votes' do
  answer = Answer.find_by(params[:id])
  vote = Vote.new(voteable_type: "Answer", voteable_id: answer.id, user_id: current_user.id)

  if vote.save?
    erb :"votes/_answer_votes"
  end

end

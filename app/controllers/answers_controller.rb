post '/questions/:id/answers' do
  @question = Question.find_by(id: params[:id])
  answer = Answer.new(user_id: current_user.id, question_id: @question.id, answer: params[:answer])
  @comments = @question.comments
  @answers = @question.answers

  if answer.save
    erb :'answers/_all_answers', layout: false
  else
    @errors = "Please type an answer:"
    erb :'answers/_all_answers', layout: false
  end

end


post '/answers/:id/best' do
  @answer = Answer.find_by(id: params[:answer_id])
  @question_id = @answer.question.id
  @answer.update_attribute(:is_best?, 'true')
  redirect "/questions/#{@question_id}"
end
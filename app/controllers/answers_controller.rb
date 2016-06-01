post '/questions/:id/answers' do
  question = Question.find_by(params[:id])
  answer = Answer.new(user_id: current_user.id, question_id: question.id, answer: params[:answer])

  if answer.save?
    #ajax necessary
    erb :"questions/show"
  end

end

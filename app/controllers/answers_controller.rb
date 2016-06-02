post '/questions/:id/answers' do
  @question = Question.find_by(id: params[:id])
  answer = Answer.new(user_id: current_user.id, question_id: @question.id, answer: params[:answer])
  @comments = @question.comments
  @answers = @question.answers
  binding.pry
  if answer.save
    erb :'answers/_all_answers', layout: false
  else
    @error = "Please type an answer"
    erb :'answers/_all_answers', layout: false
  end

end

post '/questions/:id/answers' do
  @question = Question.find_by(id: params[:id])
  answer = Answer.new(user_id: current_user.id, question_id: @question.id, answer: params[:answer])
  @comments = @question.comments
  @answers = @question.answers

  if answer.save
    erb :'answers/_all_answers', layout: false
  else
    @errors = ["Please type an answer:"]
    erb :'answers/_all_answers', layout: false
  end
end

get '/answers/new' do
  if request.xhr?
    erb :'answers/_show', layout: false
  end
end



post '/questions/:id/answers' do
  @answer = Answer.new(user_id: current_user.id, question_id: params[:id], answer: params[:answer])
  if @answer.save
    if request.xhr?
      erb :'answers/_new_answer', layout: false
    end
  else
    @errors = ["Please type an answer:"]
    erb :'questions/show', layout: false
  end
end

get '/questions/:id/answers' do
  @question = Question.find_by(id: params[:id])
  if request.xhr?
    erb :'answers/_show', layout: false
  end
end



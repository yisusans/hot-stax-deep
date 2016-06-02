get '/' do
  redirect to('/questions')
end

get '/questions' do
  @questions = Question.all
  erb :'questions/index'
end

get '/questions/new' do
  if logged_in?
    erb :'questions/new'
  else
    @errors = "Login to ask a question:"
    erb :'sessions/login'
  end
end

post '/questions' do
  @author = User.find_by(id: current_user.id)
  @question = Question.new(title: params['title'], body: params['body'], user_id: @author.id)

  if @question.save
    redirect "/questions/#{@question.id}"
  else
    @errors = @question.errors.full_messages
    erb :'questions/new'
  end
end



get '/questions/:id' do
  @question = Question.find_by(id: params['id'])
  @comments = @question.comments
  erb :'questions/show'
end



put '/questions/:id' do
  @question.assign_attributes([:question])

  if Question.save
    redirect "/questions/#{@question.id}"
  else
    @errors = @question.errors.full_messages
    erb :'questions/edit'
  end
end



delete '/questions/:id' do
  if logged_in? && current_user.id == @entry.user_id
    @question.destroy
    redirect '/questions'
  else
    @errors = "Please log in before trying to delete a question"
    erb :'questions/index'
  end
end



get '/questions/:id/edit' do
  @question = Question.find_by(id: params['id'])
  @questions = Question.all
  if logged_in? && current_user.id == @question.user_id
    erb :'questions/edit'
  else
    @errors = "Please log in before trying to edit a question"
    erb :'questions/index'
  end
end

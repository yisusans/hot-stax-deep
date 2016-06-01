get '/questions' do
  @questions = Question.all
  erb :'questions/index'
end

get '/questions/new' do
  erb :'questions/new'
end

post '/questions' do
  @author = User.find_by(id: params['user_id'])
  @question = Question.new(title: params['title'], body: params['body'], username: @author)
  if Question.save
    redirect '/questions'
  else
    @errors = @question.errors.full_messages
    erb :'questions/new'
  end
end

get '/questions/:id' do
  @question = Question.find_by(id: params['id'])
  erb :'questions/show'
end

get '/questions/:id/edit' do
  erb :'questions/edit'
end

put '/questions/:id' do

end

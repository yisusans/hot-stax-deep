get '/users/new' do
  erb :'users/new'
end

post '/users' do
  @user = User.new(username: params[:username], email: params[:email], password: params[:password])
  if @user.valid? == true
    @user.save
    erb :'/sessions/login'
  else
    @errors = @user.errors.full_messages
    erb :'/users/new'
  end
end

get '/users/:user_id' do
  @user = User.find(params[:user_id])

  erb :'users/show'
end

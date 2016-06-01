enable :sessions

get '/users/login' do
  erb :'/sessions/login'
end

post '/users/login' do
  @user = User.find_by(email: params['email'])
  if @user && @user.authenticate(params['password'])
    session[:user_id] = @user.id
    redirect '/users/#(:user_id}'
  else
    @errors = ["your email or password is discombobulating"]
    erb :'/sessions/login'
  end
end

get '/users/logout' do
  session.clear
  redirect '/'
end

enable :sessions

get '/users/login' do
  erb :'sessions/login'
end

post '/login' do
  @user = User.find_by(username: params[:username])
  if @user && @user.authenticate(params[:password])
    session[:id] = @user.id
    redirect "users/#{@user.id}"
  else
    @errors = ["your email or password is not appropriate"]
    erb :'sessions/login'
  end
end

get '/logout' do
  session.clear
  redirect '/'
end

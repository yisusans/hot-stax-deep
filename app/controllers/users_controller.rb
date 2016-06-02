get '/users' do
  erb :'users/show'
end

get '/users/new' do
  erb :"users/new"
end

post '/users/new' do
  @user = User.new(params[:entry])
  if @user.save
    erb :'users/show'
  else
    @errors = @user.errors.full_messages
    erb :'/users/new'
  end
end

get '/users/:id' do
  @user = User.find(params[:id])
  erb :'users/show'
end




get '/users' do
  erb :'users/show'
end

get '/users/new' do
  erb :"users/new"
end

get '/users/register' do
  erb :'users/register'
end

get '/users/:id' do
  @user = User.find(params[:id])
  erb :'users/show'
end


post '/users/register' do
  @user = User.new(params[:entry])
  if @user.save
    erb :'users/show'
  else
    @errors = @user.errors.full_messages
    erb :'/users/new'
  end
end



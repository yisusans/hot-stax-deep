def logged_in?
  session[:user_id]  && current_user
end

def current_user
  if session[:user_id]
    return User.find(session[:user_id])
  else
    return nil
  end
end

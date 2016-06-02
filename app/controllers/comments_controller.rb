post '/questions/:id/comments' do
  comment = Comment.new(user_id: current_user.id, comment: params[:comment], commentable_type: "Question", commentable_id: params[:id])
  @question = Question.find_by(id: params[:id])
  @comments = @question.comments
  if comment.save
    # ajax this
    erb :"/questions/show"
  end
end


post '/answers/:id/comments' do
  comment = Comment.new(user_id: current_user.id, comment: params[:comment], commentable_type: "Answer", commentable_id: params[:id])
  if comment.save?
    # ajax this
    erb :"/questions/show"
  end

end

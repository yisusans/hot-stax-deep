post '/questions/:id/comments' do
  comment = Comment.new(user_id: current_user.id, comment: params[:comment], commentable_type: "Question", commentable_id: params[:id])
  @question = Question.find_by(id: params[:id])
  @comments = @question.comments
  @answer = @question.answers
  if comment.save
    # ajax this
    erb :"/questions/show"
  end
end


post '/answers/:id/comments' do
  @comment = Comment.new(user_id: current_user.id, comment: params[:comment], commentable_type: "Answer", commentable_id: params[:id])
  answer = Answer.find_by(id: @comment.commentable_id)
  @question = Question.find_by(id: answer.question_id)
  @comments = @question.comments
  @answers = @question.answers
  # @answer_comments = @answers.comments
  if @comment.save
    erb :"/questions/show"
  end

end

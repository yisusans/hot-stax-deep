get '/questions/:id/comments' do
  @question = Question.find_by(id: params[:id])
  if request.xhr?
    erb :'/comments/_questions_comments', layout: false
  end
end

post '/questions/:id/comments' do
  @comment = Comment.new(user_id: current_user.id, comment: params[:comment], commentable_type: "Question", commentable_id: params[:id])
  if @comment.save
    if request.xhr?
      erb :"/comments/_questions_comments_show", layout: false
    end
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

$(document).ready( function(){
  $("#answer-get-form").on ("click", function(event){
    event.preventDefault();
    var $target = $(event.target)
    var $data = $target.data()
    var request = $.ajax({
      method: "GET",
      url: $data.questionId + '/answers'
    });

    request.done(function (msg){
      $("#answer-form-show").html(msg)
    });
    request.fail(function (msg) {
      console.log(msg)
    });
  });

  $("#answer-form-show").on("submit", "#answer-box", function(event) {
    event.preventDefault();
    var $target = $(event.target)
    var $data = $target.data()
    var request = $.ajax ({
      method: "POST",
      url: $data.questionId +'/answers',
      data: $target.serialize()
    });
    request.done(function (msg) {
      $(".answers-post").prepend(msg);
      $target.remove();
    });
    request.fail(function (msg) {
      console.log(msg)
    });
  });


  $(".question-box").on ("submit", function(event){
    event.preventDefault();
    var $target = $(event.target)
    var request = $.ajax ({
      method: "POST",
      url: '/questions',
      data: $target.serialize()
    });
    request.done(function (msg) {
      $(".question-wrapper").append($(msg).find('.question_main'))
    });
    $("#title-text-box").val("");
    $("#body-text-box").val("");
  });


  $(".answers-post").on ("submit", ".vote-form", function(event){
    event.preventDefault();
    var $target = $(event.target)
    var $data = $target.data()
    // console.log('/answers/'+ $data.answerId + '/votes');
    var request = $.ajax ({
      method: "POST",
      url: '/answers/'+ $data.answerId + '/votes',
      data: $target.serialize()
    });
    request.done(function (msg) {
      console.log(msg['votes']);
      $target.parent().find('#vote-count').text(msg["votes"])
    });
    request.fail(function (msg) {
      console.log(msg)
    });
  });

  $("#question-get-comment").on ("click", function(event){
    event.preventDefault();
    var $target = $(event.target);
    var $data = $target.data();
    var request = $.ajax({
      method: "GET",
      url:$data.questionId + '/comments',
      data: $target.serialize()
    });

    request.done(function (msg) {
      $("#question-comment-form-show").html(msg);
    });
  });

  $("#question-comments-show").on ("submit", "#q-comment-form", function(event) {
    event.preventDefault();
    var $target = $(event.target);
    var $data = $target.data();

    var request = $.ajax({
      method: "POST",
      url:$data.questionId + '/comments',
      data: $target.serialize()
    });

    request.done(function (msg) {
      $("#question-comments-show").append(msg);
      $target.remove();
    });
  });

});





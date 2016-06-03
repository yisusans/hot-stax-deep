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
    var request = $.ajax ({
      method: "POST",
      url: '/answers/'+ $data.answerId + '/votes',
      data: $target.serialize()
    });
    request.done(function (msg) {
      // debugger
      $target.parent().find('.vote-count').text(msg["votes"])
    });

    request.fail(function (msg) {
      console.log(msg)
    });
  });

});


//   $("#question-get-comment").on ("click", function(event){
//     event.preventDefault();
//     var $target = $(event.target);
//     var $data = $target.data();
//     var request = $.ajax({
//       method: "GET",
//       url:$data.questionId + '/comments',
//       data: $target.serialize()
//     });

//     request.done(function (msg) {
//       $("#question-comment-form-show").html(msg);
//     });
//     request.fail(function (msg) {
//       console.log(msg)
//     });
//   });

//   $("#question-comments-show").on ("submit", "#q-comment-form", function(event) {
//     event.preventDefault();
//     var $target = $(event.target);
//     var $data = $target.data();

//     var request = $.ajax({
//       method: "POST",
//       url: $data.questionId + '/comments',
//       data: $target.serialize()
//     });

//     request.done(function (msg) {
//       $("#question-comments-show").append(msg);
//       $target.remove();
//     });
//     request.fail(function (msg) {
//       console.log(msg)
//     });
//   });

//   $("#answer-get-comment").on ("click", function(event) {
//     event.preventDefault();
//     var $target = $(event.target);
//     var $data = $target.data();

//     var request = $.ajax({
//       method: "GET",
//       url:'/answers/' + $data.answerId + '/comments',
//       data: $target.serialize()
//     });
//     request.done(function (msg) {
//       $("#answer-comment-form-show").html(msg);
//     });
//   });

// $(".question_show").on ("submit", ".vote-form-question", function(event){
//     event.preventDefault();
//     var $target = $(event.target)
//     var $data = $target.data()
//     debugger;
//     var request = $.ajax ({
//       method: "POST",
//       url: '/questions/'+ $data.questionId + '/votes',
//       data: $target.serialize()
//     });

//     request.done(function (msg) {
//       $target.parent().find('.vote-count').text(msg["votes"])
//     });

//     request.fail(function (msg) {
//       console.log(msg)
//     });
// )};

//   $("#answer-comment-form-show").on ("submit", function(event) {
//     event.preventDefault();
//     var $target = $(event.target);
//     var $data = $target.data();

//     var request = $.ajax({
//       method: "POST",
//       url: '/answers/' + $data.answerID + '/comments',
//       data: $target.serialize()
//     });
//     request.done(function (msg) {
//       $("#comments-show").append(msg);
//       $target.remove();
//     });
//   });

// });





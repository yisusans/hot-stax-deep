$(document).ready( function(){
  $(".answer-box").on ("submit", function(event){
    event.preventDefault();
    var $target = $(event.target)
    var $data = $target.data()
    var request = $.ajax ({
      method: "POST",
      url: $data.questionId +'/answers',
      data: $target.serialize()
    });
    request.done(function (msg) {
      $(".answers-post").html(msg)
      });
    $("#answer-text-box").val("");
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




  $(".vote-form").on ("submit", function(event){
    event.preventDefault();
    var $target = $(event.target)
    var $data = $target.data()
    var request = $.ajax ({
      method: "POST",
      url: '/answers/'+ $data.answerId + '/votes',
      data: $target.serialize()
    });

    request.done(function (msg) {
      $("#vote-count"[]).html($(msg).find('.question_main'))
    });
  });



});



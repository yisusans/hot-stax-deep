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




  $(".answers-post").on ("submit", ".vote-form", function(event){
    event.preventDefault();
    var $target = $(event.target)
    var $data = $target.data()
    // console.log('/answers/'+ $data.answerId + '/votes');
    debugger;
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


  $(".post-button").on ("submit", function(event) {
    event.preventDefault();
  });

});



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
      // debugger
      $(".question_main").html($(msg).find('.answer-box'))
      });
    });



  // });



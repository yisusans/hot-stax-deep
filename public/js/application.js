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

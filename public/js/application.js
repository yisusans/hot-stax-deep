$(document).ready( function(){
  $("#answer-get-form").on ("click", function(event){
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
    var request = $.ajax({
      method: "GET",
      url: "/answers/new"


    var $target = $(event.target);
    var $data = $target.data();
    // debugger
    var request = $.ajax({
      method: "GET",
      url: $data.questionId + '/answers'
    });
    request.done(function (msg){
      $("#answer-form-show").html(msg)
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


  $(".post-button").on ("submit", function(event) {
    event.preventDefault();

  $("#answer-form-show").on ("click", "#answer-box", function(event){
    event.preventDefault();

    });
  });
});



  //   var $target = $(event.target)
  //   var $data = $target.data()
  //   var request = $.ajax ({
  //     method: "POST",
  //     url: $data.questionId +'/answers',
  //     data: $target.serialize()
  //   });
  //   request.done(function (msg) {
  //     $(".answers-post").html(msg)
  //     });
  //   $("#answer-text-box").val("");
  // });

//   $(".question-box").on ("submit", function(event){
//     event.preventDefault();
//     var $target = $(event.target)
//     var request = $.ajax ({
//       method: "POST",
//       url: '/questions',
//       data: $target.serialize()
//     });

//     request.done(function (msg) {
//       $(".question-wrapper").append($(msg).find('.question_main'))
//     });

//     $("#title-text-box").val("");
//     $("#body-text-box").val("");
//   });


//   $(".post-button").on ("submit", function(event) {
//     event.preventDefault();
//   });

// });



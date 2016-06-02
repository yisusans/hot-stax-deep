// $(document).ready(function () {
//   $('form').on('submit', function(event) {
//     event.preventDefault();

//     $target = $(event.target)


//     var reqArgs = {
//       url: $target.attr('action'),
//       method: $target.attr('method'),
//       data: $target.serialize(),
//       dataType: 'html'
//     };

//     var reqObj = $.ajax(reqArgs)

//     reqObj.done(function(response){
//       $('#die-container').empty();
//       $('#die-container').append(response)
//     });

//     reqObj.fail(function(response){
//       console.log("I failed you.")

//     });

//   });
//   // PSEUDO-CODE:
//   //   1- intercept the form submission event using jQuery
//   //   2- prevent the default action for that event from happening
//   //   3- use jQuery to submit an AJAX post to the form's action
//   //   4- when the AJAX post is done, display the new die roll using jQuery

// });

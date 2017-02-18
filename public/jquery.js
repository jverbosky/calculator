// borrowed button press capture script from here:
// http://jsfiddle.net/arunpjohny/YD6PL/
//
// per StackOverflow question:
// http://stackoverflow.com/questions/21026041/when-click-a-button-add-value-to-textarea
// ---------------------------------------------------
// borrowed textarea text capture script from here:
// http://jsfiddle.net/acdcjunior/FZABp/17/
//
// per StackOverflow question:
// http://stackoverflow.com/questions/5831413/get-textarea-text-with-javascript-or-jquery
// ---------------------------------------------------

$(document).ready(function () {
    $(".buttons").click(function () {
        var cntrl = $(this).html();
        $("#userInput").append(cntrl);
    });
    $(".clear").click(function () {
        // var cntrl = $(this).html();
        $("#userInput").val('');
    });
    $("#btn1").click(function () {
        alert(  $("#userInput").val()  );
    });
});

// playing around here to try and collect user input from text area

// $(document).ready(function () {
//   var user_input = $("#text_area");
// });

// $(document).ready(function () {
//     $('#btn1').click(function() {
//         alert(  $("#userInput").val()  );
//     });
// });

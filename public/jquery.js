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

// Clicking buttons, showing textarea contents and clearing textarea contents working
// but unable to add (append) more to textarea after clearing textarea
// Research indicates need to use val() instead of append()
// Saving this block while testing with val()

// $(document).ready(function () {

//     $(".buttons").click(function () {
//         var cntrl = $(this).html();
//         $("#userInput").append(cntrl);
//     });

//     $(".clear").click(function () {
//         $("#userInput").val('');
//     });

//     $("#btn1").click(function () {
//         alert(  $("#userInput").val()  );
//     });

// });

// ---------------------------------------------------

// Getting ideas from this fiddle - reference later for ideas on appending operator to number:
// http://jsfiddle.net/gYFP3/4/


$(document).ready(function () {

    // This new block isn't working but need to stop for now, will play more later...

    $(".buttons").click(function () {
        var buttonValue = $(this).html();
        var $userInput = $(#userInput)
        var val = $userInput.val();
        $userInput.val(val + buttonValue);
    });

    //  not working ^^^

    $(".clear").click(function () {
        $("#userInput").val('');
    });

    $("#btn1").click(function () {
        alert(  $("#userInput").val()  );
    });

});


// ---------------------------------------------------

// playing around here to try and collect user input from text area

// $(document).ready(function () {
//   var user_input = $("#text_area");
// });

// $(document).ready(function () {
//     $('#btn1').click(function() {
//         alert(  $("#userInput").val()  );
//     });
// });

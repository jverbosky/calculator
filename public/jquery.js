// borrowed button press capture script from here:
// http://jsfiddle.net/arunpjohny/YD6PL/
//
// per StackOverflow question:
// http://stackoverflow.com/questions/21026041/when-click-a-button-add-value-to-textarea

$(document).ready(function () {
    $(".buttons").click(function () {
        var cntrl = $(this).html();
        $("#userInput").append(cntrl);
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

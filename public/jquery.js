// borrowed button press capture script from here:
// http://jsfiddle.net/arunpjohny/YD6PL/
//
// per StackOverflow question:
// http://stackoverflow.com/questions/21026041/when-click-a-button-add-value-to-textarea
//
// note that I changed this due to append() not working after clearing via val()
// ---------------------------------------------------
// borrowed textarea text capture script from here:
// http://jsfiddle.net/acdcjunior/FZABp/17/
//
// per StackOverflow question:
// http://stackoverflow.com/questions/5831413/get-textarea-text-with-javascript-or-jquery
// ---------------------------------------------------
// got example of appending numbers from here:
// http://stackoverflow.com/questions/841722/append-text-to-input-field
// ---------------------------------------------------

$(document).ready(function () {

    // have button values appear/append in textarea field (#userInput)
    $(".button").click(function () {
        var buttonValue = $(this).html();
        $("#userInput").val($("#userInput").val() + buttonValue);
    });

    // clear contents of textarea field
    $(".clear").click(function () {
        $("#userInput").val('');
    });

    // show contents of textarea field
    // groundwork for passing values via post
    $("#btn1").click(function () {
        alert(  $("#userInput").val()  );
    });

});


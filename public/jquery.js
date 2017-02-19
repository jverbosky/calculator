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
    $(".input").click(function () {
        var buttonValue = $(this).html();
        $("#userInput").val($("#userInput").val() + buttonValue);
    });

    // add a zero before . if there isn't another number before it
    $(".dot").click(function () {
        var buttonValue = $(this).html();
        var currentExpression = $("#userInput").val();
        var dot = ".";
        var zeroPad = "0";
        var lastChar = currentExpression.substr(currentExpression.length - 1);
        if (currentExpression.length == 0) {
          $("#userInput").val(zeroPad + dot);
        } else if (lastChar.match( "[-+*/]" ) ) {
          $("#userInput").val(currentExpression + zeroPad + dot);
        } else {
          $("#userInput").val(currentExpression + dot);
        }
    });

    // flip the sign (negative/positive) of the current number
    $(".sign").click(function () {
        $("#userInput").val($("#userInput").val() * -1);
    });

    // clear contents of textarea field
    $(".clear").click(function () {
        $("#userInput").val('');
    });

});


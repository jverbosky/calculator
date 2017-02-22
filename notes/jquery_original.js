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


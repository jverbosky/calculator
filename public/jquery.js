$(document).ready(function () {

    // have button values appear/append in textarea field (#userInput)
    $(".input").click(function () {
        var buttonValue = $(this).html();
        $("#userInput").val($("#userInput").val() + buttonValue);
    });

    // add a zero before . if there isn't another number before it
    $(".dot").click(function () {
        // var buttonValue = $(this).html();
        var currentExpression = $("#userInput").val();
        var dot = ".";
        var zeroPad = "0";
        var lastChar = currentExpression.substr(currentExpression.length - 1);
        // add variable for string after previous operator (want to disallow adding . if lastNum already has)
        var lastNum = "something" // need to work out the "something" part  ^~^;
        if (currentExpression.length == 0) {
          $("#userInput").val(zeroPad + dot);
        } else if (lastChar == "." ) {
          $("#userInput").val(currentExpression);
        // need to test after working out lastNum - not sure if the match target is right here
        } else if (lastNum.match( "[.]" ) ) {
          // $("#userInput").val(currentExpression);
          $("#userInput").val("something");
        } else if (lastChar.match( "[-+*/]" ) ) {
          $("#userInput").val(currentExpression + zeroPad + dot);
        } else {
          $("#userInput").val(currentExpression + dot);
        }
    });

    // flip the sign (negative/positive) of the current number
    $(".sign").click(function () {
        var currentExpression = $("#userInput").val();
        // var lastNum = 
        var lastChar = currentExpression.substr(currentExpression.length - 1);
        $("#userInput").val(lastChar);  // outputs last character
        // $("#userInput").val($("#userInput").val() * -1);
    });

    // clear contents of textarea field
    $(".clear").click(function () {
        $("#userInput").val('');
    });

});


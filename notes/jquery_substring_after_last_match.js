$(document).ready(function () {

    // have button values appear/append in textarea field (#userInput)
    $(".input").click(function () {
        var buttonValue = $(this).html();
        $("#userInput").val($("#userInput").val() + buttonValue);
    });


    // need to add function for operator buttons - can currently enter them first without numbers
    // also need to add logic to prevent multiple concurrent operators

    // add a zero before . if there isn't another number before it
    $(".dot").click(function () {
        // var buttonValue = $(this).html();
        var currentExpression = $("#userInput").val();
        var dot = ".";
        // var zeroPad = "0";
        // var lastChar = currentExpression.substr(currentExpression.length - 1);
        // // add variable for string after previous operator (want to disallow adding . if lastNum already has)
        // var lastNum = "something"; // need to work out the "something" part  ^~^;
        // if (currentExpression.length == 0) {
        //   $("#userInput").val(zeroPad + dot);
        // } else if (lastChar == "." ) {
        //   $("#userInput").val(currentExpression);
        // // need to test after working out lastNum - not sure if the match target is right here
        // } else if (lastNum.match( "[.]" ) ) {
        //   // $("#userInput").val(currentExpression);
        //   $("#userInput").val("something");
        // } else if (lastChar.match( "[-+*/]" ) ) {
        //   $("#userInput").val(currentExpression + zeroPad + dot);
        // } else {
          $("#userInput").val(currentExpression + dot);
        // }
    });

    // flip the sign (negative/positive) of the current number
    $(".sign").click(function () {
        var currentExpression = $("#userInput").val();
        var matchOp = currentExpression.match( /[+/*-]/g );  // order of operators in regex vital!
        var firstIndexOp = currentExpression.indexOf( match[0] );  // future reference ^_^
        var lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // index of last operator
        var lastNum = currentExpression.substr(lastOpIndex+1);  // grab value after last operator

        // in progress/pseudo-code
        // if (currentExpression.match( "[-+*/]" ) ) {
        //   // Need to grab value after the last operator
        //   lastNum = currentExpression.substr(lastOpIndex+1);
        // } else {
        //   lastNum = currentExpression;
        // }

        // test code for concatenating number (integer/float) after last operator
        $("#userInput").val(currentExpression + lastNum);

        // test code to determine if I'm getting the last number after an operator
        // $("#userInput").val(lastNum);

        // test code to verify variables and output are working properly
        // var lastChar = currentExpression.substr(currentExpression.length - 1);
        // $("#userInput").val(lastChar);  // outputs last character - this is a test

        // this is production - probably need to add to an if statement
        // ex: if 
        // $("#userInput").val($("#userInput").val() * -1);
    });

    // clear contents of textarea field
    $(".clear").click(function () {
        $("#userInput").val('');
    });

});


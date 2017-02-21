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

    function getLastNum(currentExpression) {
        var matchOp = 0
        var lastOpIndex = 0
        var lastNum = currentExpression;
        if (currentExpression.match( /[+/*-]/g ) != null) {
          matchOp = currentExpression.match( /[+/*-]/g );  // order of operators in regex vital!
          lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // assign index of last operator
          lastNum = currentExpression.substr( lastOpIndex+1 );  // assign number after last operator
        }
        return lastNum
    }

    function getAllButLastNum(currentExpression) {
        var matchOp = 0
        var lastOpIndex = 0
        var lastNum = getLastNum(currentExpression)
        var allButLastNum = "";
        if (currentExpression.match( /[+/*-]/g ) != null) {
          matchOp = currentExpression.match( /[+/*-]/g );  // order of operators in regex vital!
          lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // assign index of last operator
          allButLastNum = currentExpression.substr( 0, lastOpIndex+1 );  // save everything before last number
        }
        return allButLastNum
    }

    // flip the sign (negative/positive) of the current number
    $(".sign").click(function () {
        var currentExpression = $("#userInput").val();
        var lastNum = getLastNum(currentExpression)
        var allButLastNum = getAllButLastNum(currentExpression)
        // make current number negative and encapsulate with parentheses
        if (currentExpression.match( "[-+*/]" ) ) {
         $("#userInput").val(allButLastNum + "(" + (lastNum * -1) + ")" );
        } else if (currentExpression > 0 ) {
          $("#userInput").val("(" + (currentExpression * -1) + ")" );
        }

    });

    // clear contents of textarea field
    $(".clear").click(function () {
        $("#userInput").val('');
    });

});


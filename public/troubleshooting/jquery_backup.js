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
      var lastNum = "";
      var matchOp = currentExpression.match( /[+/*-]/g );  // order of operators in regex vital!
      var lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // index of last operator
      if (currentExpression.match( "[-+*/]" ) ) {  // if there are any operators
        lastNum = currentExpression.substr( lastOpIndex+1 );  // save number after last operator
      } else {
        lastNum = currentExpression;  // otherwise save lonely number
      }
      return lastNum
    }

    function getAllButLastNum(currentExpression) {
      var lastNum = getLastNum(currentExpression)
      var allButLastNum = "";
      var matchOp = currentExpression.match( /[+/*-]/g );  // order of operators in regex vital!
      var lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // index of last operator
      if (currentExpression.match( "[-+*/]" ) ) {  // if there are any operators
        allButLastNum = currentExpression.substr( 0, lastOpIndex+1 );  // save everything before last number
      }
      return allButLastNum
    }


    // flip the sign (negative/positive) of the current number
    $(".sign").click(function () {
        var currentExpression = $("#userInput").val();
        var lastNum = getLastNum(currentExpression)
        // var allButLastNum = getAllButLastNum(currentExpression)

        // test code for output value of lastNum
        // $("#userInput").val(lastNum);

        // test code for concatenating number (integer/float) after last operator
        // $("#userInput").val(currentExpression + lastNum);

        // test code for all but the lastNum
        // $("#userInput").val(allButLastNum);

        // Next add logic for concatenating "(-" and ")" onto lastNum if not already negative
        // if (currentExpression.match( "[-+*/]" ) ) {
        //  $("#userInput").val(allButLastNum + "(" + (lastNum * -1) + ")" );
        // } else if (currentExpression > 0 ) {
           $("#userInput").val(currentExpression + currentExpression);
          // $("#userInput").val(currentExpression * -1);
        // }
    });

    // clear contents of textarea field
    $(".clear").click(function () {
        $("#userInput").val('');
    });

});


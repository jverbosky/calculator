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
        $("#userInput").val( currentExpression + dot );
      // }
    });

    function reverseString(string) {
        return string.split("").reverse().join("");
    }

    function getLastNum(currentExpression) {
      var reversed = ""
      var matchOp = []
      var lastOpIndex = 0
      var lastNum = currentExpression;
      if ( currentExpression.slice(-1) == ")" ) {  // if final character = parenthesis last number is negative
        if ( currentExpression.match(/[+/*-]/g).length > 1 ) {  // multiple operators = expression
          reversed = reverseString(currentExpression);  // reverse string to use negative lookahead
          matchOp = reversed.match(/((?!-\()-)|((?!\))[+*\/])/g);  // put operators in array but ignore negative
          matchOp = matchOp.reverse();  // reverse list of operators to correspond to original string
          lastOpIndex = currentExpression.lastIndexOf(matchOp[matchOp.length-1]);  // assign index of last operator
          lastNum = currentExpression.substr(lastOpIndex+1);  // assign number after last operator
        }
      }
      else {  // otherwise number is positive, so check for operators
        if ( currentExpression.match(/[+/*-]/g ) != null) {  // any operators = expression
          matchOp = currentExpression.match(/[+/*-]/g);  // put all operators in an array, regex order vital
          lastOpIndex = currentExpression.lastIndexOf(matchOp[matchOp.length-1]);  // assign index of last operator
          lastNum = currentExpression.substr(lastOpIndex+1);  // assign number after last operator
        }
      }
      return lastNum;
    }

    // function to return all but the current number if an expression (or nothing if not)
    function getAllButLastNum(currentExpression) {
      var lastNum = getLastNum(currentExpression);
      var allButLastNum = "";
      allButLastNum = currentExpression.slice(0, -lastNum.length);  // slice off the lastNum
      return allButLastNum;
    }

    // flip the sign (negative/positive) of the current number
    $(".sign").click(function () {
      var currentExpression = $("#userInput").val();  // get the current contents of textarea field
      var lastNum = getLastNum(currentExpression);  // get the value of lastNum
      var allButLastNum = getAllButLastNum(currentExpression);  // get the value of allButLastNum
      if ( currentExpression.slice(0, 1) == "-" ) {  // check if making a negative result positive
        $("#userInput").val( currentExpression.slice(1) );  // if so, drop the minus sign at the front
      } else if ( currentExpression.slice(-1) == ")" ) {  // if final character = parenthesis last number is negative
        $("#userInput").val( allButLastNum + lastNum.slice(2, -1) );  // remove minus sign and parentheses
      } else {  // make current number negative and encapsulate with parentheses
        if ( currentExpression.match("[-+*/]") ) {  // any operators = expression
          $("#userInput").val( allButLastNum + "(" + (lastNum * -1) + ")" );  // concatenate and make lastNum negative
        } else if ( currentExpression > 0 ) {  // check to make sure there's a number
          $("#userInput").val( "(" + (currentExpression * -1) + ")" );  // encapsulate and make lastNum negative
        }
      }
    });

    // clear contents of textarea field
    $(".clear").click(function () {
        $("#userInput").val("");
    });

});


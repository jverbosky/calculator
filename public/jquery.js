$(document).ready(function () {

  // Function to reverse string - used for negative lookahead in getLastNum if current number is negative
  function reverseString(string) {
      return string.split("").reverse().join("");
  }

  // Function to return current number (last number in expression)
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

  // Function to return all but current number if an expression (or nothing if not)
  function getAllButLastNum(currentExpression) {
    var lastNum = getLastNum(currentExpression);
    var allButLastNum = "";
    allButLastNum = currentExpression.slice(0, -lastNum.length);  // slice off the lastNum
    return allButLastNum;
  }

  // Found a bug:
  // 85-(-2) <+/- sign> 85-(-

  // Function to flip sign (negative/positive) of current number
  $(".sign").click(function () {
    var currentExpression = $("#userInput").val();  // get the current contents of textarea field
    var lastNum = getLastNum(currentExpression);  // get the value of lastNum
    var allButLastNum = getAllButLastNum(currentExpression);  // get the value of allButLastNum
    var lastChar = currentExpression.substr(currentExpression.length - 1);  // last character
    if (lastChar.match("[-+*/]") ) {  // if the last character is an operator
      $("#userInput").val( currentExpression );  // then don't flip the sign
    } else if ( currentExpression.slice(0, 1) == "-" ) {  // if making a negative result positive
      $("#userInput").val( currentExpression.slice(1) );  // drop the preceding minus sign
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

  // Function to handle adding (or not adding) a dot to current number
  $(".dot").click(function () {
    var currentExpression = $("#userInput").val();
    var dot = ".";
    var zeroPad = "0";  // used to prefix dot with zero if no current number
    var lastChar = currentExpression.substr(currentExpression.length - 1);  // last character
    var lastNum = getLastNum(currentExpression);  // get the value of lastNum
    if (currentExpression.length == 0) {  // if there is no number
      $("#userInput").val( zeroPad + dot );  // then put a zero before the dot
    // if last character is a dot or right parenthesis, or if the number already has a dot
    } else if (lastChar.match("[.)]") || lastNum.match("[.]") ) {
      $("#userInput").val( currentExpression );  // then disallow another dot
    } else if (lastChar.match("[-+*/]") ) {  // if the last character is an operator
      $("#userInput").val( currentExpression + zeroPad + dot );  // then put a zero before the dot
    } else {  // otherwise if the number is a positive integer
      $("#userInput").val( currentExpression + dot );  // add a dot to the end of the current number
    }
  });

  // Function to put numeric button values in textarea field (#userInput)
  $(".input").click(function () {
    var buttonValue = $(this).html();
    var currentExpression = $("#userInput").val();
    var lastChar = currentExpression.substr(currentExpression.length - 1);  // last character
    if (lastChar.match("[)]") ) {  // if the last character = right parenthesis
      $("#userInput").val( currentExpression );  // then disallow another number
    } else {
      $("#userInput").val($("#userInput").val() + buttonValue);  // otherwise, concatenate the number
    }
  });

  // need to add function for operator buttons - can currently enter them first without numbers
  // also need to add logic to prevent multiple concurrent operators
  // Found a bug:
  // Currently with lines 92 - 93, can't add another character after a negative
  // Fix by breaking out operators from numbers

  // Function to clear textarea field
  $(".clear").click(function () {
      $("#userInput").val("");
  });

});


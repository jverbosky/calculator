$(document).ready(function () {

  // Function to reverse string - used for negative lookahead in getLastNum if current number is negative
  function reverseString(string) {
      // split string into an array, reverse contents of array, join array back into string
      return string.split("").reverse().join("");
  }

  // Function to return current number (last number in expression)
  function getLastNum(currentExpression) {
    var reversed = ""  // string to hold reversed expression (no support for negative lookbehind in JS)
    var matchOp = []  // array to hold the operators extracted from the expression
    var lastOpIndex = 0  // variable to hold index (position) of last operator in expression
    var lastNum = currentExpression;  // assign the current expression to lastNum
    if ( currentExpression.slice(-1) == ")" ) {  // if final character = parenthesis last number is negative
      if ( currentExpression.match(/[+/*-]/g).length > 1 ) {  // multiple operators = expression
        reversed = reverseString(currentExpression);  // reverse string to use negative lookahead
        matchOp = reversed.match(/((?!-\()-)|((?!\))[+*\/])/g);  // put operators in array but ignore negative
        matchOp = matchOp.reverse();  // reverse list of operators to correspond to original string
        lastOpIndex = currentExpression.lastIndexOf(matchOp[matchOp.length-1]);  // assign index of last operator
        if ( matchOp.slice(-1)[0] == "-" ) {  // check if final operator is minus
          lastNum = currentExpression.substr( lastOpIndex-1 );  // if so, decrease lastOpIndex to grab negative
        } else {
            lastNum = currentExpression.substr( lastOpIndex+1 );  // if not, increase lastOpIndex to grab negative
        }
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
    var lastNum = getLastNum(currentExpression);  // get last number in expression
    var allButLastNum = "";
    allButLastNum = currentExpression.slice(0, -lastNum.length);  // slice off lastNum
    return allButLastNum;
  }

  // Function to flip sign (negative/positive) of current number
  $(".sign").click(function () {
    var currentExpression = $("#userInput").val();  // get current contents of textarea field
    var lastNum = getLastNum(currentExpression);  // get value of lastNum
    var allButLastNum = getAllButLastNum(currentExpression);  // get value of allButLastNum
    var lastChar = currentExpression.substr(currentExpression.length - 1);  // last character
    if ( lastChar.match("[-+*/]") || lastChar == "." ) {  // if last character is an operator or a dot
      $("#userInput").val( currentExpression );  // then don't flip sign
    } else if ( currentExpression.slice(0, 1) == "-" ) {  // if making a negative result positive
      $("#userInput").val( currentExpression.slice(1) );  // drop preceding minus sign
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
    var dot = ".";  // dot character - used instead of grabbing from current .erb file as in operator()
    var zeroPad = "0";  // used to prefix dot with zero if no current number
    var lastChar = currentExpression.substr(currentExpression.length - 1);  // last character
    var lastNum = getLastNum(currentExpression);  // get value of lastNum
    if (currentExpression.length == 0) {  // if there is no number
      $("#userInput").val( zeroPad + dot );  // then put a zero before dot
    // if last character is a dot or right parenthesis, or if number already has a dot
    } else if (lastChar.match("[.)]") || lastNum.match("[.]") ) {
      $("#userInput").val( currentExpression );  // then disallow another dot
    } else if ( lastChar.match("[-+*/]") ) {  // if last character is an operator
      $("#userInput").val( currentExpression + zeroPad + dot );  // then put a zero before dot
    } else {  // otherwise if number is a positive integer
      $("#userInput").val( currentExpression + dot );  // add a dot to end of current number
    }
  });

  // Function to put operator button values in textarea field (#userInput)
  $(".operator").click(function () {
    var buttonValue = $(this).html();  // get value of button defined in current .erb file
    var currentExpression = $("#userInput").val();  // get current contents of textarea field
    var lastChar = currentExpression.substr(currentExpression.length - 1);  // last character
    // if nothing has been entered or last character is an operator
    if ( currentExpression == "" || lastChar.match("[-+*/]") ) {
      $("#userInput").val( currentExpression );  // then disallow an operator
    } else {
      $("#userInput").val( $("#userInput").val() + buttonValue );  // otherwise, concatenate operator
    }
  });

  // Function to put numeric button values in textarea field (#userInput)
  $(".number").click(function () {
    var buttonValue = $(this).html();  // get value of button defined in current .erb file
    var currentExpression = $("#userInput").val();  // get current contents of textarea field
    var lastChar = currentExpression.substr(currentExpression.length - 1);  // last character
    if ( lastChar.match("[)]") ) {  // if last character = right parenthesis
      $("#userInput").val( currentExpression );  // then disallow another number
    } else {
      $("#userInput").val( $("#userInput").val() + buttonValue );  // otherwise, concatenate number
    }
  });

  // Function to clear textarea field
  $(".clear").click(function () {
      $("#userInput").val( "" );  // set textarea field to an empty string
  });

});
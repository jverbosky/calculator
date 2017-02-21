function reverseString(string) {
    return string.split("").reverse().join("");
}

function getLastNum(currentExpression) {
  var reversed = "";
  var matchOp = [];
  var lastOpIndex = 0;
  var lastNum = currentExpression;
  if (currentExpression.slice(-1) == ")" ) {  // if final character = parenthesis last number is negative
    if (currentExpression.match( /[+/*-]/g ).length > 1 ) {  // multiple operators = expression
      reversed = reverseString(currentExpression);  // reverse string to use negative lookahead
      matchOp = reversed.match( /((?!-\()-)|((?!\))[+*\/])/g );  // put operators in array but ignore negative
      matchOp = matchOp.reverse();  // reverse list of operators to correspond to original string
      lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // assign index of last operator
      lastNum = currentExpression.substr( lastOpIndex+1 );  // assign number after last operator
    }
  }
  else {  // otherwise number is positive, so check for operators
    if (currentExpression.match( /[+/*-]/g ) != null) {  // any operators = expression
      matchOp = currentExpression.match( /[+/*-]/g );  // put all operators in an array, regex order vital
      lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // assign index of last operator
      lastNum = currentExpression.substr( lastOpIndex+1 );  // assign number after last operator
    }
  }
  return lastNum;
}

// function to return all but the current number if an expression (or nothing if not)
function getAllButLastNum(currentExpression) {
  var lastNum = getLastNum(currentExpression);
  var allButLastNum = "";
  allButLastNum = currentExpression.slice(0, -lastNum.length);
  return allButLastNum;
}

// flip the sign (negative/positive) of the current number
function flipSign(currentExpression) {
  // var currentExpression = $("#userInput").val();  // get the current contents of textarea field
  var lastNum = getLastNum(currentExpression);  // get the value of lastNum
  var allButLastNum = getAllButLastNum(currentExpression);  // get the value of allButLastNum
  if (currentExpression.slice(-1) == ")" ) {  // if final character = parenthesis last number is negative
    manipulated = allButLastNum + lastNum.slice(2, -1);  // remove minus sign and parentheses
  } else {  // make current number negative and encapsulate with parentheses
    if (currentExpression.match( "[-+*/]" ) ) {  // any operators = expression
      manipulated = (allButLastNum + "(" + (lastNum * -1) + ")" );  // concatenate and make lastNum negative
    } else if (currentExpression > 0 ) {  // check to make sure there's a number
      manipulated = ("(" + (currentExpression * -1) + ")" );  // encapsulate and make lastNum negative
    }
  }
  return manipulated;
}

// Sandbox testing
console.log(getLastNum("3"))  // 3
console.log(getLastNum("2+4.1/3.1*88.8"))  // 88.8
console.log(getLastNum("(-3)"))  // (-3)
console.log(getLastNum("2+4.1/3.1*(-88.8)"))  // (-88.8)
console.log(getAllButLastNum("3"))  // ""
console.log(getAllButLastNum("3-2+4.1/3.1*88.8"))  // 3-2+4.1/3.1*
console.log(getAllButLastNum("(-3)"))  // ""
console.log(getAllButLastNum("3-2+4.1/3.1*(-88.8)"))  // 3-2+4.1/3.1*
console.log(flipSign("3"))  // (-3)
console.log(flipSign("2+4.1/3.1*88.8"))  // 2+4.1/3.1*(-88.8)
console.log(flipSign("(-3)"))  // 3
console.log(flipSign("2+4.1/3.1*(-88.8)"))  // 2+4.1/3.1*88.8
// updated getLastNum() to address minus operator preceding current negative number (lines 19 - 23)
// updated flipSign() to address final character being an operator or a dot (lines 49 - 51)

function reverseString(string) {
    return string.split("").reverse().join("");
}

function getLastNum(currentExpression) {
  var reversed = ""
  var matchOp = []
  var lastOpIndex = 0
  var lastNum = currentExpression;
  if (currentExpression.slice(-1) == ")" ) {  // if final character = parenthesis last number is negative
    if (currentExpression.match( /[+/*-]/g ).length > 1 ) {  // if there are multiple operators, it's an expression
      reversed = reverseString(currentExpression)  // reverse string to use negative lookahead
      matchOp = reversed.match( /((?!-\()-)|((?!\))[+*\/])/g );  // put operators in array but ignore negative
      matchOp = matchOp.reverse()  // reverse list of operators to correspond to original string
      lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // assign index of last operator
      if ( matchOp.slice(-1)[0] == "-" ) {  // check if final operator is minus
        lastNum = currentExpression.substr( lastOpIndex-1 );  // if so, decrease lastOpIndex to grab negative
      } else {
          lastNum = currentExpression.substr( lastOpIndex+1 );  // if not, increase lastOpIndex to grab negative
      }
    }
  }
  else {  // otherwise number is positive, so check for operators
    if (currentExpression.match( /[+/*-]/g ) != null) {  // if there are any operators, it's an expression
      matchOp = currentExpression.match( /[+/*-]/g );  // put all operators in an array
      lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // assign index of last operator
      lastNum = currentExpression.substr( lastOpIndex+1 );  // assign number after last operator
    }
  }
  return lastNum
}

function getAllButLastNum(currentExpression) {
  var lastNum = getLastNum(currentExpression)
  var allButLastNum = ""
  allButLastNum = currentExpression.slice(0, -lastNum.length)
  return allButLastNum
}

function flipSign(currentExpression) {
  // var currentExpression = $("#userInput").val();  // get the current contents of textarea field
  manipulated = currentExpression;
  result = ""
  var lastNum = getLastNum(currentExpression);  // get the value of lastNum
  var allButLastNum = getAllButLastNum(currentExpression);  // get the value of allButLastNum
  var lastChar = currentExpression.substr(currentExpression.length - 1);  // last character
  if (lastChar.match("[-+*/]") || lastChar == "." ) {  // if the last character is an operator or a dot
    manipulated = ( currentExpression );  // then don't flip the sign
  } else if ( currentExpression.slice(0, 1) == "-") {  // check if making a negative result positive
    manipulated = ( currentExpression.slice(1) );  // if so, drop the minus sign at the front
  } else if (currentExpression.slice(-1) == ")" ) {  // if final character = parenthesis last number is negative
    manipulated = allButLastNum + lastNum.slice(2, -1);  // remove minus sign and parentheses
  } else {  // make current number negative and encapsulate with parentheses
    if (currentExpression.match( "[-+*/]" ) ) {  // any operators = expression
      manipulated = (allButLastNum + "(" + (lastNum * -1) + ")" );  // concatenate and make lastNum negative
    } else if (currentExpression > 0 ) {  // check to make sure there's a number
      manipulated = ( "(" + (currentExpression * -1) + ")" );  // encapsulate and make lastNum negative
    }
  }
  return manipulated;
}

// Sandbox testing
console.log(getLastNum("3"))  // 3
console.log(getLastNum("2+4.1/3.1*88.8"))  // 88.8
console.log(getLastNum("(-3)"))  // (-3)
console.log(getLastNum("2+4.1/3.1*(-88.8)"))  // (-88.8)
console.log(getLastNum("2+4.1/3.1-(-88.8)"))  // (-88.8)
console.log(getAllButLastNum("3"))  // ""
console.log(getAllButLastNum("3-2+4.1/3.1*88.8"))  // 3-2+4.1/3.1*
console.log(getAllButLastNum("(-3)"))  // ""
console.log(getAllButLastNum("3-2+4.1/3.1*(-88.8)"))  // 3-2+4.1/3.1*
console.log(getAllButLastNum("3-2+4.1/3.1-(-88.8)"))  // 3-2+4.1/3.1*
console.log(flipSign("3"))  // (-3)
console.log(flipSign("2+4.1/3.1*88.8"))  // 2+4.1/3.1*(-88.8)
console.log(flipSign("(-3)"))  // 3
console.log(flipSign("2+4.1/3.1*(-88.8)"))  // 2+4.1/3.1*88.8
console.log(flipSign("2+4.1/3.1-(-88.8)"))  // 2+4.1/3.1*88.8
console.log(flipSign("-123.456"))  //123.456
console.log(flipSign("3+"))  // 3+
console.log(flipSign("3+0."))  // 3+0.
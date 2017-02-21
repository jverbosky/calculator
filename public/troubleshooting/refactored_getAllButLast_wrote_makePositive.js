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
      lastNum = currentExpression.substr( lastOpIndex+1 );  // assign number after last operator
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

// function to make current posivite number negative and add parentheses
function makeNegative(currentExpression) {
  var manipulated = ""
  var lastNum = getLastNum(currentExpression)
  var allButLastNum = getAllButLastNum(currentExpression)
  // make current number negative and encapsulate with parentheses
  if (currentExpression.match( "[-+*/]" ) ) {
    manipulated = (allButLastNum + "(" + (lastNum * -1) + ")" );
  } else if (currentExpression > 0 ) {
    manipulated = ("(" + (currentExpression * -1) + ")" );
  }
  return manipulated
}

// function to make current negative number positive and remove parentheses
function makePositive(currentExpression) {
  var manipulated = ""
  var lastNum = getLastNum(currentExpression)
  var allButLastNum = getAllButLastNum(currentExpression)
  manipulated = allButLastNum + lastNum.slice(2, -1)
  return manipulated
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
console.log(makeNegative("3"))  // (-3)
console.log(makeNegative("2+4.1/3.1*88.8"))  // 2+4.1/3.1*(-88.8)
console.log(makePositive("(-3)"))  // 3
console.log(makePositive("3-2+4.1/3.1*(-88.8)"))  // 3-2+4.1/3.1*88.8
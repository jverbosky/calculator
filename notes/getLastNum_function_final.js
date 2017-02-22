// updated to address minus operator preceding current negative number (lines 18 - 22)

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

// Sandbox testing
console.log(getLastNum("3"))  // 3
console.log(getLastNum("2+4.1/3.1*88.8"))  // 88.8
console.log(getLastNum("(-3)"))  // (-3)
console.log(getLastNum("2+4.1/3.1*(-88.8)"))  // (-88.8)
console.log(getLastNum("2+4.1/3.1-(-88.8)"))  // (-88.8)
// updated to address minus operator preceding current negative number (lines 18 - 22)

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

// Function to handle adding (or not adding) a dot to the current number
function makeDot(currentExpression) {
  var manipulated = currentExpression;
  var dot = ".";
  var zeroPad = "0";  // used to prefix dot with zero if no current number
  var lastChar = currentExpression.substr(currentExpression.length - 1);  // last character
  var lastNum = getLastNum(currentExpression);  // get the value of lastNum
  if (currentExpression.length == 0) {  // if there is no number
    manipulated = ( zeroPad + dot );  // then put a zero before the dot
  // if last character is a dot or right parenthesis, or if the number already has a dot
  } else if (lastChar.match("[./)]") || lastNum.match("[.]") ) {
    manipulated = currentExpression;  // then don't add another dot
  } else if (lastChar.match("[-+*/]") ) {  // if the last character is an operator
    manipulated = ( currentExpression + zeroPad + dot );  // then put a zero before the dot
  } else {  // otherwise if the number is a positive integer
    manipulated = ( currentExpression + dot );  // add a dot to the end of the current number
  }
  return manipulated
}

// Sandbox testing
console.log(makeDot(""))  // 0.
console.log(makeDot("12."))  // 12.
console.log(makeDot("123"))  // 123.
console.log(makeDot("(-123)"))  // (-123)
console.log(makeDot("1.23"))  // 1.23
console.log(makeDot("(-1.23)"))  // (-1.23)
console.log(makeDot("3+"))  // 3+0.
console.log(makeDot("3-"))  // 3+0.
console.log(makeDot("3+12."))  // 3+12.
console.log(makeDot("3-12."))  // 3+12.
console.log(makeDot("3+123"))  // 3.123.
console.log(makeDot("3-123"))  // 3.123.
console.log(makeDot("3+(-123)"))  // 3+(-123)
console.log(makeDot("3-(-123)"))  // 3+(-123)
console.log(makeDot("3+1.23"))  // 3+1.23
console.log(makeDot("3-1.23"))  // 3+1.23
console.log(makeDot("3+(-1.23)"))  // 3+(-1.23)
console.log(makeDot("3-(-1.23)"))  // 3+(-1.23)
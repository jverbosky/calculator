// var currentExpression = "(-3)";
// var currentExpression = "3";
var currentExpression = "3-2+4.1/3.1*(-8)";
// var currentExpression = "3-2+4.1/3.1*8";

var matchOp = 0
var lastOpIndex = 0
var lastNum = currentExpression;
var reversed = ""

function reverseString(str) {
    return str.split("").reverse().join("");
}

// JavaScript doesn't support negative lookbehinds, so reverse string and use negative lookahead

// Works for single negative digit
if (currentExpression.match( "[(]" ) ) {
  matchOp = currentExpression.match( /[+/*-]/g );  // order of operators in regex vital!
  lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-3] );  // assign index of last operator
  lastNum = currentExpression.substr( lastOpIndex+1 );  // assign number after last operator
}

// Works for expression with a negative digit
if (currentExpression.match( /[+/*-]/g ) != null) {
  if (currentExpression.match( "[(]" ) ) {
    reversed = reverseString(currentExpression)  // reverse the string to use the negative lookahead
    matchOp = reversed.match( /((?!-\()-)|((?!\))[+*\/])/g );  // return operators but ignore negative
    matchOp = matchOp.reverse()  // reverse the list of operators so they correspond to original string
    lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // assign index of last operator
    lastNum = currentExpression.substr( lastOpIndex+1 );  // assign number after last operator
  }
}

console.log(lastNum)
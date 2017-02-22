// Sandbox testing
// - only use one pair of currentExpression and reversed variables per test
//------------------------------------------
// minus preceding negative number
// var currentExpression = "5*8-6/2+3-(-1)"
// var reversed = ")1-(-3+2/6-8*5";
// var currentExpression = "5*8-6/2+3-(-10)"
// var reversed = ")01-(-3+2/6-8*5";
// var currentExpression = "5*8-6/2+3-(-10.34)"
// var reversed = ")43.01-(-3+2/6-8*5";
//------------------------------------------
// plus preceding negative number
// var currentExpression = "5*8-6/2+3+(-1)"
// var reversed = ")1-(+3+2/6-8*5";
// var currentExpression = "5*8-6/2+3+(-10)"
// var reversed = ")01-(+3+2/6-8*5";
// var currentExpression = "5*8-6/2+3+(-10.34)"
// var reversed = ")43.01-(+3+2/6-8*5";
//------------------------------------------
// multiply preceding negative number
// var currentExpression = "5*8-6/2+3*(-1)"
// var reversed = ")1-(*3+2/6-8*5";
// var currentExpression = "5*8-6/2+3*(-10)"
// var reversed = ")01-(*3+2/6-8*5";
// var currentExpression = "5*8-6/2+3*(-10.34)"
// var reversed = ")43.01-(*3+2/6-8*5";
//------------------------------------------
// divide preceding negative number
// var currentExpression = "5*8-6/2+3/(-1)"
// var reversed = ")1-(/3+2/6-8*5";
// var currentExpression = "5*8-6/2+3/(-10)"
// var reversed = ")01-(/3+2/6-8*5";
// var currentExpression = "5*8-6/2+3/(-10.34)"
// var reversed = ")43.01-(/3+2/6-8*5";
//------------------------------------------

var matchOp = [];

matchOp = reversed.match( /((?!-\()-)|((?!\))[+*\/])/g );  // put operators in array but ignore negative
matchOp = matchOp.reverse()  // reverse array of operators to correspond to original string

console.log(matchOp) // [ '*', '-', '/', '+', '-' ]

// get last item in array
console.log(matchOp.slice(-1)[0]) // -

lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // assign index of last operator
console.log("Last number negative - lastOpIndex: "+lastOpIndex)

if ( matchOp.slice(-1)[0] == "-" ) {  // check if final operator is minus
  lastNum = currentExpression.substr( lastOpIndex-1 );  // if so, decrease lastOpIndex to grab negative
  console.log("Preceding operator minus - lastNum: "+lastNum)
} else {
    lastNum = currentExpression.substr( lastOpIndex+1 );  // if not, increase lastOpIndex to grab negative
  console.log("Preceding operator not minus - lastNum: "+lastNum)
}
function getLastNum(currentExpression) {
  var matchOp = 0
  var lastOpIndex = 0
  var lastNum = currentExpression;
  if (currentExpression.match( /[+/*-]/g ) != null) {
    matchOp = currentExpression.match( /[+/*-]/g );  // order of operators in regex vital!
    lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // assign index of last operator
    lastNum = currentExpression.substr( lastOpIndex+1 );  // assign number after last operator
  }
  return lastNum
}

function getAllButLastNum(currentExpression) {
  var matchOp = 0
  var lastOpIndex = 0
  var lastNum = getLastNum(currentExpression)
  var allButLastNum = "";
  if (currentExpression.match( /[+/*-]/g ) != null) {
    matchOp = currentExpression.match( /[+/*-]/g );  // order of operators in regex vital!
    lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // assign index of last operator
    allButLastNum = currentExpression.substr( 0, lastOpIndex+1 );  // save everything before last number
  }
  return allButLastNum
}

// function to make current number negative and add parentheses
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

// Sandbox testing
console.log(getLastNum("2+4.1/3.1*8"))  // 8
console.log(getLastNum("3"))  // 3
console.log(getAllButLastNum("2+4.1/3.1*8"))  // 2+4.1/3.1*
console.log(getAllButLastNum("3"))  // ""
console.log(makeNegative("3"))  // (-3)
console.log(makeNegative("2+4.1/3.1*8"))  // 2+4.1/3.1*(-8)
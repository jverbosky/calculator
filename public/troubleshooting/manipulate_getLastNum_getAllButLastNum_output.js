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

function manipulateInput(currentExpression) {
  var lastNum = getLastNum(currentExpression)
  var allButLastNum = getAllButLastNum(currentExpression)
  var manipulated = currentExpression + currentExpression
  return manipulated
}

console.log(manipulateInput("3"))  // 33
console.log(manipulateInput("3+2"))  // 3+23+2
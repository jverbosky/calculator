// function getLastNum(currentExpression) {
//   var lastNum = "";
//   var matchOp = 0
//   var lastOpIndex = 0
//   var matchOp = currentExpression.match( /[+/*-]/g );  // order of operators in regex vital!
//   var lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // index of last operator
//   if (currentExpression.match( "[-+*/]" ) ) {  // if there are any operators
//     lastNum = currentExpression.substr( lastOpIndex+1 );  // save number after last operator
//   } else {
//     lastNum = currentExpression;  // otherwise save lonely number
//   }
//   return lastNum
// }

// function getAllButLastNum(currentExpression) {
//   var lastNum = getLastNum(currentExpression)
//   var allButLastNum = "";
//   var matchOp = currentExpression.match( /[+/*-]/g );  // order of operators in regex vital!
//   var lastOpIndex = currentExpression.lastIndexOf( matchOp[matchOp.length-1] );  // index of last operator
//   if (currentExpression.match( "[-+*/]" ) ) {  // if there are any operators
//     allButLastNum = currentExpression.substr( 0, lastOpIndex+1 );  // save everything before last number
//   }
//   return allButLastNum
// }

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

function manipulateInput() {
  var currentExpression = "3"  // 33
  var currentExpression = "3+2";  // 3+23+2
  var lastNum = getLastNum(currentExpression)
  var allButLastNum = getAllButLastNum(currentExpression)
  var manipulated = currentExpression + currentExpression
  return manipulated
}

console.log(manipulateInput())
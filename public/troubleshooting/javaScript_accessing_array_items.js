var string = "5*8-6/2+3-(-1)"
var reversed = ")1-(-3+2/6-8*5";
var matchOp = [];

matchOp = reversed.match( /((?!-\()-)|((?!\))[+*\/])/g );  // put operators in array but ignore negative

console.log(matchOp) // [ '-', '+', '/', '-', '*' ]
console.log(matchOp[0]) // -
console.log(matchOp[1]) // +

matchOp = matchOp.reverse()  // reverse array of operators to correspond to original string

console.log(matchOp) // [ '*', '-', '/', '+', '-' ]

// get last item in array
console.log(matchOp.slice(-1)[0]) // -
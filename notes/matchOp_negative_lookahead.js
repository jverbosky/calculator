var currentExpression = "3-2+4.1/3.1*(-8)";
var matchOp = 0;
var reversed = ""

function reverseString(str) {
    return str.split("").reverse().join("");
}

reversed = reverseString(currentExpression)  // reversed:  )8-(*1.3/1.4+2-3
matchOp = reversed.match( /((?!-\()-)|((?!\))[+*\/])/g );
matchOp = matchOp.reverse()

console.log(matchOp)


// matchOp = currentExpression.match( /(((?<!\()-)|((?!\))[+*\/]))/ );  // original regex - negative lookbehind
// matchOp = currentExpression.match( /((?!-\()-)|((?!\))[+*\/])/g );  // JavaScript regex - negative lookahead

// JavaScript doesn't support look-behind assertions
// need to find way to do this in JavaScript:  ((?<!\()-)
// use negative lookahead to do this in JavaScript:  ((?!-\()-)
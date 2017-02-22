num_1 = 4
num_2 = 5

// ------------------------------------------
// Case 1 - String output outside a function
// - all statments output as expected - newline for each:
//
// num_1 is less than num_2
// num_1 is not equal to num_2
// num_1 is not greater than num_2
// ------------------------------------------

// if (num_1 < num_2) {
//   console.log("num_1 is less than num_2");
// } else {
//   console.log("num_1 is not less than num_2");
// }

// if (num_1 = num_2) {
//   console.log("num_1 is equal to num_2");
// } else {
//   console.log("num_1 is not equal to num_2");
// }

// if (num_1 > num_2) {
//   console.log("num_1 is greater than num_2");
// } else {
//   console.log("num_1 is not greater than num_2");
// }

// ------------------------------------------
// Case 2 - String output inside a function
// - all statments output as expected - newline for each:
//
// num_1 is less than num_2
// num_1 is not equal to num_2
// num_1 is not greater than num_2
// ------------------------------------------

// function compareNumbers(num_1, num_2) {
//   if (num_1 < num_2) {
//     console.log("num_1 is less than num_2");
//   } else {
//     console.log("num_1 is not less than num_2");
//   }

//   if (num_1 = num_2) {
//     console.log("num_1 is equal to num_2");
//   } else {
//     console.log("num_1 is not equal to num_2");
//   }

//   if (num_1 > num_2) {
//     console.log("num_1 is greater than num_2");
//   } else {
//     console.log("num_1 is not greater than num_2");
//   }
// }

// compareNumbers(num_1, num_2)

// ------------------------------------------
// Case 3 - Accessing arguments inside a function
// - all statments output as expected - newline for each:
//
// num_1 (4) is less than num_2 (5)
// num_1 (5) is equal to num_2 (5)
// num_1 (5) is not greater than num_2 (5)
// ------------------------------------------

// function compareNumbers(num_1, num_2) {
//   if (num_1 < num_2) {
//     console.log("num_1 ("+num_1+") is less than num_2 ("+num_2+")");
//   } else {
//     console.log("num_1 ("+num_1+") is not less than num_2 ("+num_2+")");
//   }

//   if (num_1 = num_2) {
//     console.log("num_1 ("+num_1+") is equal to num_2 ("+num_2+")");
//   } else {
//     console.log("num_1 ("+num_1+") is not equal to num_2 ("+num_2+")");
//   }

//   if (num_1 > num_2) {
//     console.log("num_1 ("+num_1+") is greater than num_2 ("+num_2+")");
//   } else {
//     console.log("num_1 ("+num_1+") is not greater than num_2 ("+num_2+")");
//   }
// }

// compareNumbers(num_1, num_2)

// ------------------------------------------
// Case 4 - Accessing local variables inside a function after operations
// - all statments output as expected - newline for each:
//
// The sum of num_1 (4) and num_2 (5) is 9.
// The difference between num_1 (4) and num_2 (5) is -1.
// The product of num_1 (4) and num_2 (5) is 20.
// The quotient of num_1 (4) and num_2 (5) is 0.8.
// 9
// ------------------------------------------

function calculateNumbers(num_1, num_2) {
  sum = ( num_1 + num_2 );
  console.log("The sum of num_1 ("+num_1+") and num_2 ("+num_2+") is "+sum+".");
  difference = ( num_1 - num_2 );
  console.log("The difference between num_1 ("+num_1+") and num_2 ("+num_2+") is "+difference+".");
  product = ( num_1 * num_2 );
  console.log("The product of num_1 ("+num_1+") and num_2 ("+num_2+") is "+product+".");
  quotient = ( num_1 / num_2 );
  console.log("The quotient of num_1 ("+num_1+") and num_2 ("+num_2+") is "+quotient+".");
  return sum;
}

console.log(calculateNumbers(num_1, num_2))

// ------------------------------------------
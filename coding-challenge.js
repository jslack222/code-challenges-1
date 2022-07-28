//Sunday July 24, 2022

// function smash(words) {
//   var string = words.join(" ");
//   return string;
// }
// console.log(smash(['howdy', 'partner', 'smash']))
 

// var string = words.join(" ");
// return string;


// Monday July 25, 2022
// function expressionMatter(a, b, c) {
//   const results = [];
//   results[0] = a * (b + c);
//   results[1] = a * b * c;
//   results[2] = a * b + c;
//   results[3] = a + b * c;
//   results[4] = (a + b) * c;
//   results[5] = a + b + c;
//   return Math.max(...results);
// }
// console.log(expressionMatter(3, 3, 2))

//Tuesday July 26, 2022

// function invert(array) {
//   return array.map(num => num * -1)
// }
// console.log(invert([-1, 2, -3, 4]))

//Thursday July 28, 2022

function oddOrEven(array) {
  return array.reduce(function(a, b) {return a + b}, 0) % 2 == 0 ? 'even' : 'odd'
}
console.log(oddOrEven([1, 2, 3]))
console.log(oddOrEven([]))

//The arr. reduce() method in JavaScript is used
// to reduce the array to a single value and executes
// a provided function for each value of the array
//   (from left - to - right) and the return value
//   of the function is stored in an accumulator.


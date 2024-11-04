/* 
 ? Rest and Spread Operators: -
 * Rest (...) collects multiple elements into a single array.
 * Spread (...) spreads elements out from an array or object.
*/

// rest operator
function sum(...numbers) {
  // Here, ...numbers is the rest operator
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// spread operator
const numbers = [1, 2, 3];
const newNumbers = [0, ...numbers, 4]; // Here, ...numbers is the spread operator

console.log(newNumbers); // Output: [0, 1, 2, 3, 4]

// Demonstrating Short-Circuiting and Logical Operators ( && || ! )
// Exploring Truthy and Falsy values in JavaScript

const book = {
  id: 1,
  title: "Harry Potter",
  publicationDate: "2008-08-01",
  author: "J.K. Rowling",
  hasMovieAdaptation: true,
};

const { hasMovieAdaptation } = book;

// Checking Truthy values
console.log(true ? "Some text - Truthy value." : ""); // Outputs if true (Truthy)
console.log(hasMovieAdaptation ? "This book has a movie." : ""); // Checks if hasMovieAdaptation is truthy

// Checking Falsy values ( 0, '', null, undefined )
console.log(false ? "Falsy" : ""); // Short-circuits: as soon as JS finds `false`, it stops further evaluation
console.log(0 ? "Falsy" : ""); // Short-circuits on 0 (falsy)
console.log(null ? "Falsy" : ""); // Short-circuits on null (falsy)
console.log(undefined ? "Falsy" : ""); // Short-circuits on undefined (falsy)

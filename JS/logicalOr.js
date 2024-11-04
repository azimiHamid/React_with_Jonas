// Demonstrating Short-Circuiting and Logical OR ( || ) Operator
// Exploring how || handles Truthy and Falsy values in JavaScript

const book = {
  id: 1,
  title: "Harry Potter",
  publicationDate: "2008-08-01",
  author: "J.K. Rowling",
  hasMovieAdaptation: true,
  reviews: 0,
};

// Using || to set a default value if book title is falsy
const bookTitle = book.title || "Unknown Title"; // If book.title is falsy, "Unknown Title" is used
console.log(bookTitle); // Output: "Harry Potter"

// || short-circuits as soon as a truthy value is found, skipping remaining checks
console.log("" || "Fallback text"); // Output: "Fallback text" ("" is falsy, so it goes to next value)
console.log(null || "Default Author"); // Output: "Default Author" (null is falsy)
console.log(undefined || "No value"); // Output: "No value" (undefined is falsy)

// Since 0 is a falsy value, `||` treats it as false and returns "no data" instead of the actual 0
console.log(book.reviews || "no data"); // Output: "no data"

// Using ?? (Nullish Coalescing) operator
// The `??` operator only falls back to "no data" if `book.reviews` is null or undefined
// Here, `??` correctly displays 0, as it’s neither null nor undefined
console.log(book.reviews ?? "no data"); // Output: 0

// || with a truthy first value skips the second
console.log("Hello" || "World"); // Output: "Hello" (short-circuits on first truthy value)
console.log(1 || "One"); // Output: 1 (short-circuits since 1 is truthy)

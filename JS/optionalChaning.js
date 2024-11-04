/* 
 * Optional Chaining (?.): Allows you to access nested properties without errors if any part of the path is undefined or null.

 * If any property along the chain is missing, the expression returns undefined instead of throwing an error.

*/

const book = {
  id: 1,
  title: "Harry Potter",
  publicationDate: "2008-08-01",
  author: "J.K. Rowling",
  hasMovieAdaptation: true,
  reviews: 0,
  details: {
    genre: "Fantasy",
    ratings: {
      averageRating: 4.8,
      numberOfRatings: 5000,
    },
  },
};

// Using optional chaining to safely access nested properties
console.log(book.details?.genre); // Output: "Fantasy"
console.log(book.details?.ratings?.averageRating); // Output: 4.8
console.log(book.details?.ratings?.numberOfRatings); // Output: 5000

// Trying to access a non-existent property with optional chaining
console.log(book.details?.publisher?.name); // Output: undefined (doesn’t throw an error)

// Without optional chaining, attempting to access a non-existent property would throw an error
// console.log(book.details.publisher.name); // Uncommenting this would cause an error

// reduce method : arr.reduce((acc, current), 0)
// The second parameter (0) of the reduce method shows the initial value of acc
// It can be 0, empty array, or empty object --> 0 or [] or {}

import { books } from "./books.js";

const totalReviews = books.reduce((acc, book) => acc + book.reviews, 0);
// console.log(totalReviews); // 19

const booksWithMovies = books.reduce(
  (acc, book) => (book.hasMovieAdaptation ? acc + 1 : acc),
  0
);
// console.log("number of books with movies =", booksWithMovies);

const totalRatings = books.reduce(
  (acc, book) => acc + book.details.ratings.averageRating,
  0
);
const avgRating = totalRatings / books.length;
console.log(avgRating);

const uniqueAuthors = books.reduce((acc, book) => {
  if (!acc.includes(book.author)) {
    acc.push(book.author);
  }
  return acc;
}, []);
console.log(uniqueAuthors)
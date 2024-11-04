import { books } from "./books.js";

const nums = [4, 2, 5, 7, 8, 6, 1];
const sorted = [...nums].sort((a, b) => a - b); // slice will make a copy of nums and apply sort method on it.
// console.log(sorted) // [1, 2, 4, 5, 6, 7, 8]
// console.log(nums) // [4, 2, 5, 7, 8, 6, 1]

const sortedByView = books
  .slice()
  .sort((a, b) => b.reviews - a.reviews)
  .map((book) => ({
    title: book.title,
    reviews: book.reviews,
    hasMovieAdaptation: book.hasMovieAdaptation,
  }))
  .filter((book) => book.hasMovieAdaptation == true);
console.log(sortedByView);

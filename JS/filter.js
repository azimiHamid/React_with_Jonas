import { books } from "./books.js";

// filter chaining
const classicBooksWithMovie = books
  .filter((book) => book.publicationDate.split("-")[0] < 1950)
  .filter((book) => book.hasMovieAdaptation);
// console.log(classicBooksWithMovie);

const fantasyBooks = books.filter((book) => book.details.genre == "Fantasy");
// console.log(fantasyBooks)

const fictionBooksWithMovie = books
  .filter(
    (book) => book.details.genre.includes("Fiction") && book.hasMovieAdaptation
  )
  .map((book) => book.title);
console.log(fictionBooksWithMovie.toLocaleString());

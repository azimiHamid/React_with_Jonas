import { books } from "./books.js";

// map
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book, id) => book.title);
console.log(titles);

const essentailData = books.map((book) => ({
  title: book.title,
  author: book.author,
  hasMovieAdaptation: book.hasMovieAdaptation,
}));
console.log(essentailData);

import { books } from "./books.js";

const newBook = {
  id: 30,
  title: "The Vikings",
  hasMovieAdaptation: true,
  author: "Robert Lee",
  publicationDate: "2020-08-18",
};

const booksAfterAdd = [...books, newBook];
// console.log(booksAfterAdd);

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 10);
// console.log(booksAfterDelete);

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 30 ? { ...book, title: "Game of Thrones" } : book
);
// console.log(booksAfterUpdate);

const checkDuplicateBook = booksAfterUpdate
  .filter((book) => book.title.toLocaleLowerCase().startsWith("t"))
  .map((book) => book.title);

console.log(
  checkDuplicateBook.length,
  "Books which their names start with the letter 'T'"
);
console.log(checkDuplicateBook);

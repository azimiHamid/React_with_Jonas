// Template literals (`__ ${variable} ___`)

const book = {
  id: 1,
  title: "Harry Potter",
  publicationDate: "2008-08-01",
  author: "J.K. Rollings",
  hasMovieAdaptation: true,
};

// destructure
const { title, publicationDate, author, hasMovieAdaptation } = book;

// template literal
const summary = `${title} is a book which was writte by ${author} at ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"}been adapted as movie.`;
console.log(summary);

// ternary operators
const booksStatus =
  publicationDate.split("-")[0] > 2000 ? "Modern Book" : "Classic Book";
console.log(booksStatus);

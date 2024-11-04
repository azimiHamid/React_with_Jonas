const book = {
  id: 1,
  title: "Harry Potter",
  publicationDate: "2008-08-01",
  author: "J.K. Rollings",
  hasMovieAdaptation: true,
};

const { title, publicationDate, author, hasMovieAdaptation } = book;

// arrow function
const getYear = (str) => str.split("-")[0];

const summary = `${title} is a book which was writte by ${author} at ${
  getYear(publicationDate)
}. The book has ${hasMovieAdaptation ? "" : "not"}been adapted as movie.`;
console.log(summary);

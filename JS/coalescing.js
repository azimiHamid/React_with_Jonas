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

// Accessing a nested property with ?. and using ?? for fallback if it's null or undefined
const publisherName =
  book.details?.publisher?.name ?? "Publisher information not available";
console.log(publisherName); // Output: "Publisher information not available"

// Optional chaining with an existing property and using ?? for a fallback
const genre = book.details?.genre ?? "Genre not specified";
console.log(genre); // Output: "Fantasy"

// Accessing ratings with optional chaining and providing a fallback if undefined
const averageRating =
  book.details?.ratings?.averageRating ?? "No rating available";
console.log(averageRating); // Output: 4.8

// Accessing a potentially undefined nested property without causing an error
const editor = book.details?.editor?.name ?? "Editor information not available";
console.log(editor); // Output: "Editor information not available"

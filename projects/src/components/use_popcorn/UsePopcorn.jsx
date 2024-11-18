/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    title: "Inception",
    year: 2010,
    poster:
      "https://image.tmdb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
  },
  {
    imdbID: "tt0816692",
    title: "Interstellar",
    year: 2014,
    poster:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    imdbID: "tt4154796",
    title: "Avengers: Endgame",
    year: 2019,
    poster:
      "https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
  },
  {
    imdbID: "tt0068646",
    title: "The Godfather",
    year: 1972,
    poster:
      "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    title: "Inception",
    year: 2010,
    poster:
      "https://image.tmdb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0080684",
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    poster:
      "https://image.tmdb.org/t/p/original/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.length
    ? Math.round(arr.reduce((acc, curr) => acc + curr, 0) / arr.length)
    : 0;

function UsePopcorn() {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 grid-rows-[auto_1fr] justify-items-center p-4 bg-gray-900 text-white">
      <Navbar />
      <Main />
    </section>
  );
}

const Navbar = () => {
  return (
    <nav className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between bg-custom-purple p-4 rounded-lg shadow-lg mb-6">
      <Logo />
      <div className="flex justify-between items-center gap-5">
        <Search />
        <NumResults />
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <span role="img" className="text-2xl">
        🍿
      </span>
      <h1 className="text-3xl font-bold">usePopcorn</h1>
    </div>
  );
};

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <input
      type="search"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="mt-3 p-2 sm:flex-1 sm:w-1/2 rounded-lg bg-gray-700 focus:shadow-2xl focus:-translate-y-1 transition-transform duration-300 outline-none border-none"
    />
  );
};

const NumResults = () => {
  return (
    <>
      {/* <p className="mt-3 text-sm">Found {movies.length} results</p> */}
      <p className="mt-3 text-sm">Found {"X"} results</p>
    </>
  );
};

const Main = () => {
  // const handleMovieClick = (title) => {
  // Check if the movie is already in the watched list
  //   const isAlreadyWatched = watched.some((movie) => movie.title === title);
  //   if (isAlreadyWatched) {
  //     alert("This movie is already in the watched list!");
  //     return;
  //   }

  //   const newWatchedMovie = movies.find((m) => m.title === title);
  //   setWatched([...watched, newWatchedMovie]);
  // };

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <Left />
      <Right />
    </main>
  );
};

const Left = () => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <aside className="relative h-auto max-h-[80vh] overflow-y-auto scrollbar-hide bg-gray-800 p-4 rounded-lg shadow-lg">
      <button
        className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-full"
        onClick={() => setIsOpen1((prev) => !prev)}
      >
        {isOpen1 ? "-" : "+"}
      </button>
      {isOpen1 && <MovieList />}
    </aside>
  );
};

const MovieList = () => {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="grid gap-3 mt-4">
      {movies?.map((movie, idx) => (
        <Movie movie={movie} key={idx} />
      ))}
    </ul>
  );
};

const Movie = ({ movie }) => {
  return (
    <li className="flex items-center space-x-4 border-b border-white/10 pb-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
      <img
        className="w-16 h-20 object-cover rounded-lg"
        src={movie.poster}
        alt={movie.title}
      />
      <div>
        <h3 className="font-bold text-white">{movie.title}</h3>
        <p className="text-sm text-gray-400">🗓️ {movie.year}</p>
      </div>
    </li>
  );
};

const Right = () => {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <aside className="relative h-auto max-h-[80vh] overflow-y-auto scrollbar-hide bg-gray-800 p-4 rounded-lg shadow-lg">
      <button
        className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-full"
        onClick={() => setIsOpen2((prev) => !prev)}
      >
        {isOpen2 ? "-" : "+"}
      </button>
      {isOpen2 && (
        <div className="space-y-4 mt-4">
          <h2 className="text-lg font-bold mb-4 text-white">
            Movies You Watched
          </h2>

          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </div>
      )}
    </aside>
  );
};

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
      <span>😲 Total: {watched.length}</span>
      <span>⭐ IMDb: {avgImdbRating}</span>
      <span>✨ User: {avgUserRating}</span>
      <span>⏳ Runtime: {avgRuntime} min</span>
    </div>
  );
};

const WatchedList = ({ watched }) => {
  return (
    <ul>
      {watched.map((movie, idx) => (
        <li
          key={idx}
          className="flex items-center justify-between my-3 p-2 bg-gray-700 rounded-lg border border-gray-600"
        >
          <div className="flex items-center space-x-4">
            <img
              className="w-12 h-16 object-cover rounded-lg"
              src={movie.poster}
              alt={movie.title}
            />
            <div>
              <h3 className="font-bold text-white">{movie.title}</h3>
              <p className="my-1 text-xs text-gray-400">
                ⭐ {movie.imdbRating} | ✨ {movie.userRating} | ⏳{" "}
                {movie.runtime} min
              </p>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-500 text-white p-2 flex items-center justify-center rounded-full w-[30px] h-[30px]">
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UsePopcorn;

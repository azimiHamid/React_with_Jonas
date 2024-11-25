/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import StarRating from "./StarRating";

const average = (arr) =>
  arr.length ? arr.reduce((acc, curr) => acc + curr, 0) / arr.length : 0;

const KEY = "10f92d62";

function UsePopcorn() {
  const [query, setQuery] = useState("interstellar");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((prev) => [movie, ...prev]);
  };

  const handleDeleteWatched = (id) => {
    const updatedWatchedMovies = watched.filter((m) => m.imdbID !== id);
    setWatched(updatedWatchedMovies);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok) throw new Error("Can't fetch movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    <>
      {/* components composition can stop props drilling */}
      <Navbar>
        <Logo />
        <div className="flex justify-around items-center gap-5">
          <Search query={query} setQuery={setQuery} />
          <NumResults movies={movies} />
        </div>
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMsg message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              onCloseMovie={handleCloseMovie}
              selectedId={selectedId}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>

        {/* This part can also be handled as followings, like we see in react-router */}
        {/* <Box element={<MovieList movies={movies} />} />
        
        <Box
          element={
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          }
        /> */}
      </Main>
    </>
  );
}

const ErrorMsg = ({ message }) => {
  return (
    <p className="h-full w-full py-10 text-2xl flex justify-center">
      <span>🚫</span> {message}
    </p>
  );
};

const Loader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

const Navbar = ({ children }) => {
  return (
    <nav className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between bg-custom-purple p-4 rounded-lg shadow-lg mb-6">
      {children}
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

const Search = ({ query, setQuery }) => {
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

const NumResults = ({ movies }) => {
  return <p className="mt-3 text-sm">Found {movies.length} results</p>;
};

const Main = ({ children }) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl sm:px-24 md:p-0">
      {children}
    </main>
  );
};

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className="relative h-auto max-h-[80vh] overflow-y-auto scrollbar-hide bg-gray-800 p-4 rounded-lg shadow-lg">
      <button
        className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-full"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </aside>
  );
};

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="grid gap-3 mt-4">
      {movies?.map((movie, idx) => (
        <Movie onSelectMovie={onSelectMovie} movie={movie} key={idx} />
      ))}
    </ul>
  );
};

const Movie = ({ movie, onSelectMovie }) => {
  return (
    <li
      onClick={() => onSelectMovie(movie.imdbID)}
      className="flex items-center space-x-4 border-b border-white/10 pb-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
    >
      <img
        className="w-16 h-20 object-cover rounded-lg"
        src={movie.Poster}
        alt={movie.Title}
      />
      <div>
        <h3 className="font-bold text-white">{movie.Title}</h3>
        <p className="text-sm text-gray-400">🗓️ {movie.Year}</p>
      </div>
    </li>
  );
};

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((m) => m.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (m) => m.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Poster: poster,
    Year: year,
    Actors: actors,
    Plot: plot,
    imdbRating,
    Runtime: runtime,
    Director: director,
    Genre: genre,
    Released: released,
  } = movie;

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  };

  useEffect(() => {
    const getMovieDeatails = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    };

    getMovieDeatails();
  }, [selectedId]);

  useEffect(() => {
    document.title = "tEST";
  }, []);

  return (
    <article className="flex flex-col text-white rounded-lg overflow-hidden w-full max-w-4xl mx-auto">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="bg-gray-900 rounded-lg">
            <div className="w-full h-6">
              <button
                className="h-9 w-9 flex items-center justify-center hover:bg-gray-700 text-gray-100 rounded-full transition-all"
                onClick={onCloseMovie}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col md:flex-row m-5 gap-5">
              <figure className="md:w-1/3 h-[300px] md:h-auto flex-shrink-0">
                <img
                  src={poster}
                  alt={title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </figure>
              <div className="md:w-2/3 py-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {title} <span className="text-gray-400">({year})</span>
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {genre} <br /> {released} • {runtime} <br />✨{" "}
                    <span className="text-yellow-400 font-semibold">
                      {imdbRating}
                    </span>{" "}
                    IMDb rating
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="rounded-xl flex items-center flex-col bg-gray-900 p-5">
              {!isWatched ? (
                <>
                  <StarRating
                    size={26}
                    color="#F9C23C"
                    maxRating={10}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="bg-[#6741D9] py-1 px-10 mt-5 rounded-full"
                      onClick={handleAdd}
                    >
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p className="text-gray-400 text-center italic">
                  You have already rated this movie:
                  <span className="text-yellow-400 font-semibold">
                    {" "}
                    {watchedUserRating} ⭐
                  </span>
                  <br />
                  <span className="text-gray-500 text-sm">
                    Rated on: {new Date().toLocaleDateString()}
                  </span>
                </p>
              )}
            </div>
            {/* Movie Details */}
            <div className=" mt-5">
              <p className="text-sm mb-4 leading-relaxed">{plot}</p>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Actors:</span> {actors}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Director:</span> {director}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Released:</span> {released}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(
    watched.map((movie) => movie.imdbRating)
  ).toFixed(1);
  const avgUserRating = average(
    watched.map((movie) => movie.userRating)
  ).toFixed(1);
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-lg font-bold mb-4 text-white">Movies You Watched</h2>
      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
        <span>📈 Total: {watched.length}</span>
        <span>⭐ IMDb: {avgImdbRating}</span>
        <span>✨ User: {avgUserRating}</span>
        <span>⏳ Runtime: {avgRuntime} min</span>
      </div>
    </div>
  );
};

const WatchedList = ({ watched, onDeleteWatched }) => {
  return (
    <ul>
      {watched.map((movie, idx) => (
        <WatchedMovie
          movie={movie}
          key={idx}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

const WatchedMovie = ({ movie, onDeleteWatched }) => {
  return (
    <li className="flex items-center justify-between my-3 p-2 bg-gray-700 rounded-lg border border-gray-600">
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-16 object-cover rounded-lg"
          src={movie.poster}
          alt={movie.title}
        />
        <div>
          <h3 className="font-bold text-white">{movie.title}</h3>
          <p className="my-1 text-xs text-gray-400">
            ⭐ {movie.imdbRating} | ✨ {movie.userRating} | ⏳ {movie.runtime}{" "}
            min
          </p>
        </div>
      </div>
      <button
        onClick={() => onDeleteWatched(movie.imdbID)}
        className="bg-red-600 hover:bg-red-500 text-white p-2 flex items-center justify-center rounded-full w-[30px] h-[30px]"
      >
        x
      </button>
    </li>
  );
};

export default UsePopcorn;

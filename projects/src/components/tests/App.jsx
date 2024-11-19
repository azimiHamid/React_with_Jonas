// . component composition (prevent prop drilling)

// function App() {
//   const [movies, setMovies] = useState(tempMovieData);
//   const [watched, setWatched] = useState(tempWatchedData);

//   return (
//     <>
//       {/* Component composition:
//     Use custom components (e.g., Navbar, Main, Box) as wrappers, similar to HTML tags */}

//       <Navbar>
//         <Logo />
//         <Search />
//         <NumResults movies={movies} />
//       </Navbar>

//       <Main>
//         <Box>
//           <MovieList movies={movies} />
//         </Box>

//         <Box>
//           <WatchedSummary watched={watched} />
//           <WatchedList watched={watched} />
//         </Box>
//       </Main>
//     </>
//   );
// }

// export default App;

// . component composition Vs. passing component as prop
function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      {/* Component composition:
    Use custom components (e.g., Navbar, Main, Box) as wrappers, similar to HTML tags */}
      <Navbar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </Navbar>



      {/* passing component as props: like we see in react-router */}
      <Main>
        <Box element={<MovieList movies={movies} />} />

        <Box
          element={
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          }
        />
      </Main>
    </>
  );
}

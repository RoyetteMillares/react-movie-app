// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SearchIcon from "./images/search.svg";
// import MovieCard from "./MovieCard";

// const Main = () => {
//   const [movieData, setMovieData] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   // http://www.omdbapi.com/?i=tt3896198&apikey=e2bcd5c2
//   const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=e2bcd5c2";
//   // async function fetchData(title) {
//   //   try {
//   //     const response = await axios.get(`${API_URL}&s=${title}`);
//   //     setMovieData(response.data.Search);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // }
//   async function searchMovie(title) {
//     try {
//       const response = await axios.get(`${API_URL}&s=${title}`);
//       setMovieData(response.data.Search)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect(() => {
//     searchMovie('Marvel');
//   }, []);

//   return (
//     <div>
//       <h1>Movies</h1>
//       <div className="search">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search for movies"
//         />
//         <img
//           src={SearchIcon}
//           alt="search"
//           onClick={() => searchMovie(searchTerm)}
//         />
//       </div>

//       {movieData?.length > 0 ? (
//         <div className="container">
//           {movieData.map((movie, i) => (
//             <MovieCard movie={movie} key={i} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;

import React, { useState, useEffect } from "react";
import SearchIcon from "./images/search.svg";
import MovieCard from "./MovieCard";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState(null);
  const [search, setsearch] = useState("");
  const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=e2bcd5c2";

  const getMovie = async (title) => {
    try {
      const response = await axios.get(`${API_URL}&s=${title}`);
      setMovies(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie("Superman");
  }, []);
  return (
    <div>
      <header className="search">
        <input
          type="text"
          value={search}
          placeholder="Search Movie"
          onChange={(e) => setsearch(e.target.value)}
        />
        <img src={SearchIcon} alt="Search" onClick={() => getMovie(search)} />
      </header>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, i) => (
            <MovieCard movies={movie} key={i} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Main;

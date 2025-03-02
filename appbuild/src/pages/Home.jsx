import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { fetchMovies } from "../services/api";

const Home = () => {
  const [query, setQuery] = useState("Batman");
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(query, type, page);
      if (data.Response === "True") setMovies(data.Search);
      else setMovies([]);
    };
    getMovies();
  }, [query, type, page]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
       <h1 className="text-3xl font-bold text-center mb-6">🎬 Movie Search App</h1>
      <SearchBar query={query} setQuery={setQuery} type={type} setType={setType} />
      <MovieList movies={movies} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;

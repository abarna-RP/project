import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="border p-2">
        <img src={movie.Poster} alt={movie.Title} className="w-[600px] h-[600px] object-cover rounded-md shadow-md transform transition-transform duration-300 hover:scale-105" />
        <h3 className="text-lg font-bold">{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;

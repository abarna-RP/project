import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4 ">
      <img src={movie.Poster} alt={movie.Title} className=" md:w-1/3 md:pl-8 tracking-wider text-white" />
      <h1 className="text-4xl mb-2 font-bold">{movie.Title}</h1>
      
      <p className="mb-2 text-2xl"><strong className="font-bold text-white">Year:</strong> {movie.Year}</p>
          <p className="mb-2 text-2xl"><strong className="font-bold">Genre:</strong> {movie.Genre}</p>
          <p className="mb-2 text-2xl"><strong className="font-bold">Plot:</strong> {movie.Plot}</p>
          <p className="mb-2 text-2xl"><strong className="font-bold">Cast:</strong> {movie.Actors}</p>
          <p className="mb-2 text-2xl"><strong className="font-bold">Ratings:</strong></p>
    </div>
  );
};

export default MovieDetail;

import axios from "axios";

const API_KEY = "5f2c4543";
const BASE_URL = "http://www.omdbapi.com/";

export const fetchMovies = async (query, type, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { s: query, type, page, apikey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies", error);
    return { Response: "False", Error: "Something went wrong" };
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { i: id, apikey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details", error);
    return null;
  }
};

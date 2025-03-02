import React from "react";

const SearchBar = ({ query, setQuery, type, setType }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-3 w-full text-white rounded-lg focus:outline-none"
        placeholder="Search movies..."
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-3 border text-white rounded-lg"
      >
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>
    </div>
  );
};

export default SearchBar;

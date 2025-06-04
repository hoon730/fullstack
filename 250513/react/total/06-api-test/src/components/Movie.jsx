import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = "46d1f10a8f0adcef07e6187ff984064a";
const BASE_URL = "https://api.themoviedb.org/3";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const axiosMovie = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: {
            api_key: API_KEY,
          },
        });
        console.log(response.data);
        setMovies(response.data.results);
      } catch (error) {}
    };
    axiosMovie();
  }, []);

  return (
    <div>
      <h2>인기 영화</h2>
      <ul>
        {movies.map((movie, idx) => (
          <li key={idx}>
            <h3>{movie.title}</h3>
            <p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;

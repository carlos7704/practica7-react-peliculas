import { useEffect, useState } from "react";
import { get } from "../services/httpClient";
import MovieCard from "./MovieCard";
import "./MovieGrid.css";

function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    get("/discover/movie")
      .then((data) => setMovies(data.results ?? []))
      .catch((requestError) => setError(requestError.message));
  }, []);

  if (error) {
    return <p className="status-message error-message">{error}</p>;
  }

  if (movies.length === 0) {
    return <p className="status-message">Cargando películas...</p>;
  }

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
        />
      ))}
    </ul>
  );
}

export default MovieGrid;

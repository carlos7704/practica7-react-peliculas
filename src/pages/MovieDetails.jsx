import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    get(`/movie/${movieId}`)
      .then((data) => {
        setMovie(data);
        setError("");
      })
      .catch((requestError) => {
        setMovie(null);
        setError(requestError.message);
      });
  }, [movieId]);

  if (error) {
    return (
      <div className="details-status">
        <p className="error-message">{error}</p>
        <Link className="back-link" to="/">Volver al listado</Link>
      </div>
    );
  }

  if (!movie) {
    return <p className="details-status">Cargando información...</p>;
  }

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <article className="detailsContainer">
      <img src={imageUrl} alt={movie.title} className="movieImage" />
      <div className="movieDetails">
        <Link className="back-link" to="/">← Volver al listado</Link>
        <h2>{movie.title}</h2>
        <p>
          <strong>Géneros:</strong>{" "}
          {movie.genres?.map((genre) => genre.name).join(", ") || "No disponibles"}
        </p>
        <p>
          <strong>Descripción:</strong>{" "}
          {movie.overview || "No hay una descripción disponible."}
        </p>
      </div>
    </article>
  );
}

export default MovieDetails;

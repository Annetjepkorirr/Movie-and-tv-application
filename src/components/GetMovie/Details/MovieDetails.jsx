
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'; 
import { getMovieDetails } from "../../../utils/utilities";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieDetail = () => {
  const { movieId } = useParams(); 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const movieData = await getMovieDetails(movieId);
      setMovie(movieData);
    })();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-details">
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`}alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
     
    </div>
  );
};

export default MovieDetail;


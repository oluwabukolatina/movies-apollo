import React from 'react';
import PropTypes from 'prop-types';

export default function Movie({ movie }) {
  return (
    <div className="movie">
      <p className="movie-title">{movie.name}</p>
      <img alt="movie poster" className="movie-image" src="https://rb.gy/mmwyus" />

      <div className="movie-detail">
        <p>{movie.genre}</p>
        <p>{movie.year}</p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  movie: PropTypes.shape(),
};

import React from 'react';
import useMovies from '../hooks/useMovies';

function AddMovie() {
  const { movie, onChange, createMovie } = useMovies();

  const { name, year, genre } = movie;
  const saveMovie = (e) => {
    e.preventDefault();
    createMovie(movie);
  };

  return (
    <div className="add">
      <form onSubmit={saveMovie}>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input type="text" name="year" value={year} onChange={onChange} />
        <input type="text" name="genre" value={genre} onChange={onChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default AddMovie;

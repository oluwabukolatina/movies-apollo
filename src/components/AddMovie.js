import React from 'react';
import useMovies from '../hooks/useMovies';

function AddMovie() {
  const { movie, onChange } = useMovies();
  const { name, year, genre } = movie;
  return (
    <div>
      <form>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input type="text" name="year" value={year} onChange={onChange} />
        <input type="text" name="genre" value={genre} onChange={onChange} />
      </form>
    </div>
  );
}
export default AddMovie;

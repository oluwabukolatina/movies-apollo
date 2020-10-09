import { useState } from 'react';
const useMovies = () => {
  const initialState = {
    name: '',
    genre: '',
    year: '',
  };
  const [movie, setMovie] = useState(initialState);
  const [movies] = useState([
    { name: 'John Wick', genre: 'action', year: 2020 },
    { name: 'J ames', genre: 'horroe', year: 2010 },
    { name: 'Partridge Wick', genre: 'thriller', year: 2023 },
    { name: 'Partridge Wike', genre: 'thriller', year: 2021 },
    { name: 'Partridge Mouse', genre: 'thriller', year: 2033 },
    { name: 'Parrot Wick', genre: 'thriller', year: 2023 },
  ]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };
  return { movies, movie, onChange };
};
export default useMovies;

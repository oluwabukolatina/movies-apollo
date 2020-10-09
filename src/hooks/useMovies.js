import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADD_MOVIE } from '../graphql/mutations';
import { GET_MOVIES } from '../graphql/queries';
const useMovies = () => {
  const [addMovie] = useMutation(ADD_MOVIE);
  const initialState = {
    name: '',
    genre: '',
    year: '',
  };
  const [movie, setMovie] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };
  const createMovie = () => {
    addMovie({
      variables: movie,
      refetchQueries: [{ query: GET_MOVIES }],
    });
    setMovie(initialState);
  };
  return { movie, onChange, createMovie };
};
export default useMovies;

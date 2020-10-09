import React from 'react';
import AddMovie from './AddMovie';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../graphql/queries';
import Movie from './Movies';

function Home() {
  const { data, loading } = useQuery(GET_MOVIES);
  if (loading) return <small>loading</small>;
  return (
    <div className="container">
      <AddMovie />
      <div className="movies">
        {data.movies.map((movie, i) => (
          <Movie movie={movie} key={i + 1} />
        ))}
      </div>
    </div>
  );
}

export default Home;

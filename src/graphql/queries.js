import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query getMovies {
    movies {
      year
      genre
      name
    }
  }
`;

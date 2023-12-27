import { getMovieByQuery } from 'API/movies';
import SearchBar from 'components/SearchBar/SearchBar';
import { StyledList } from '../components/TrendingList/TrendingList.styled';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    async function getSearch() {
      try {
        setIsLoading(true);
        const query = searchParams.get('search');
        const { results } = await getMovieByQuery(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getSearch();
  }, [searchParams]);

  return (
    <>
      <SearchBar />
      {isLoading && <div>Loading...</div>}
      <StyledList>
        {movies &&
          movies.map(el => {
            return (
              <li key={el.id}>
                <Link to={`${el.id}`} state={location}>
                  {el.title}
                </Link>
              </li>
            );
          })}
      </StyledList>
    </>
  );
};

export default Movies;

import { getTrendingMovies } from 'API/movies';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Heading2, StyledLink, StyledList } from './TrendingList.styled';

const TrendingList = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  async function getMovies() {
    try {
      setIsLoading(true);
      const { results } = await getTrendingMovies();
      setIsLoading(false);
      setMovies(results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      <Heading2>Trending today</Heading2>
      <StyledList>
        {movies?.map(el => {
          return (
            <li key={el.id}>
              <StyledLink to={`movies/${el.id}`} state={location}>
                {el.title || el.name}
              </StyledLink>
            </li>
          );
        })}
      </StyledList>
    </>
  );
};

export default TrendingList;

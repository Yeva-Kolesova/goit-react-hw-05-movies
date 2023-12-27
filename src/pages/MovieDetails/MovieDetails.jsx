import { getMovieById } from 'API/movies';
import { useNavigate, useLocation } from 'react-router-dom';
import { Outlet, useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import {
  Heading4,
  MovieDetailsInfo,
  MovieImage,
  MovieInfo,
  MovieWrapper,
  NavStyledLink,
  MovieText,
  MovieTitle,
  WrapperLinks,
} from 'pages/MovieDetails/MovieDetails.styled';
import { StyledBtn } from 'components/uiComponents/Button/Button.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    async function getMovieDetail() {
      try {
        setIsLoading(true);
        const result = await getMovieById(movieId);

        setMovie(result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetail();
  }, [movieId]);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      <StyledBtn onClick={() => navigate(location.state ?? '/movies')}>
        Go back
      </StyledBtn>
      {movie && (
        <MovieWrapper>
          <MovieDetailsInfo>
            <MovieImage
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              width="300"
            />
            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieText>
                User score - {movie.vote_average.toFixed(1)}/10
              </MovieText>
              <Heading4>Overview</Heading4>
              <MovieText>{movie.overview}</MovieText>
              <Heading4>Genres</Heading4>
              <MovieText>{movie.genres.map(el => el.name + ' ')}</MovieText>
            </MovieInfo>
          </MovieDetailsInfo>
          <WrapperLinks>
            <NavStyledLink to="cast" state={location.state}>
              Cast
            </NavStyledLink>
            <NavStyledLink to="reviews" state={location.state}>
              Reviews
            </NavStyledLink>
          </WrapperLinks>
          <Outlet />
        </MovieWrapper>
      )}
    </>
  );
};

export default MovieDetails;

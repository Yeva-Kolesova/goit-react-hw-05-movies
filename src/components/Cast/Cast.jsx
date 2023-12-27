import { getCast } from 'API/movies';
import { CastList } from './Cast.styled';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      const { cast } = await getCast(movieId);
      setCast(cast);
    }
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <CastList>
          {cast.map(el => {
            return (
              <li key={el.id}>
                <img
                  width="150"
                  src={`https://image.tmdb.org/t/p/original/${el.profile_path}`}
                  alt={el.name}
                />
                <p>{el.name}</p>
                <p>{el.character}</p>
              </li>
            );
          })}
        </CastList>
      )}
    </>
  );
};

export default Cast;

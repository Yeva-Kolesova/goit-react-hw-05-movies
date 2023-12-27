import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input } from './SearchBar.styled';

const SearchBar = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [, setSearchParams] = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchMovie) {
      setSearchParams({ search: searchMovie });
    }
  }
  function handleChange(e) {
    setSearchMovie(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          placeholder="Enter movie name"
          value={searchMovie}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default SearchBar;

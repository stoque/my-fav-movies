import React from 'react'

const Search = ({ handleSearch }) => (
  <form onSubmit={handleSearch}>
    <input type='search' name='search' placeholder='Search Movies and TV Shows...'/>
  </form>
)

export default Search

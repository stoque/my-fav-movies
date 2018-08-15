import React from 'react'
import styled from 'styled-components'

const Search = ({ handleSearch }) => (
  <form onSubmit={handleSearch} autoComplete="off" >
    <Input type='text' name='search' placeholder='Search Movies and TV Shows...' />
  </form>
)

const Input = styled.input`
  display: inline-block;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  height: 40px;
  margin: 20px 0;
  text-align: center;
  transition: box-shadow 0.4s linear;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  }
`

export default Search

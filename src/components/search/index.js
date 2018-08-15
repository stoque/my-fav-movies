import React from 'react'
import styled from 'styled-components'

const Search = ({ handleSearch }) => (
  <form onSubmit={handleSearch} autoComplete="off" >
    <Input type='search' name='search' placeholder='Search Movies and TV Shows...' />
  </form>
)

const Input = styled.input`
  display: inline-block;
  border: none;
  border-radius: 3px;
  font-size: 20px;
  height: 40px;
  margin: 20px 0;
  text-align: center;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #5f27cd;
  }
`

export default Search

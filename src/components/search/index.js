import React, { Fragment } from 'react'
import styled from 'styled-components'

const Search = ({ handleSearch }) => (
  <Fragment>
    <svg aria-hidden="true" style={{position: 'absolute', width: 0, height: 0, overflow: 'hidden'}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
    <symbol id="icon-search" viewBox="0 0 32 32">
    <title>search</title>
    <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
    </symbol>
    </defs>
    </svg>

    <Form onSubmit={handleSearch} autoComplete="off" >
      <Input type='text' name='search' placeholder='Search Movies and TV Shows...' />
      <Button>
        <svg>
          <use xlinkHref='#icon-search'/>
        </svg>
      </Button>
    </Form>
  </Fragment>
)

const Form = styled.form`
  position: relative;
  margin: 20px 0;
`

const Input = styled.input`
  display: inline-block;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  height: 40px;
  text-align: center;
  transition: box-shadow 0.3s linear;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
`

const Button = styled.button`
  background: none;
  border: none;
  height: 100%;
  padding: 0 4px;
  position: absolute;
  right: 4px;
  top: 0;
  svg {
    display: inline-block;
    fill: #000;
    height: 20px;
    width: 20px;
  }
`

export default Search

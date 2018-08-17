import React, { Fragment } from 'react'
import styled from 'styled-components'

const ErrorMessage = ({ hasSearched }) => (
  <Fragment>
    {hasSearched &&
      <Text>Movie not found!</Text>
    }
  </Fragment>
)

const Text = styled.p`
  font-size: 20px;
  text-align: center;
`

export default ErrorMessage

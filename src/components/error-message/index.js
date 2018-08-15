import React, { Fragment } from 'react'

const ErrorMessage = ({ hasSearched }) => (
  <Fragment>
    {hasSearched &&
      <p>Movie not found! :(</p>
    }
  </Fragment>
)

export default ErrorMessage

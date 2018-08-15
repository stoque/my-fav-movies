import React, { Fragment } from 'react'

const MovieCard = ({ movieInfo }) => (
  <Fragment>
    {movieInfo &&
      <div>
        <img src={movieInfo.poster} alt={`${movieInfo.title} poster`} />
        <h2>{movieInfo.title}</h2>
        <h3>{movieInfo.year}</h3>
        <p>{movieInfo.director}</p>
        <p>{movieInfo.actors}</p>
        <p>{movieInfo.plot}</p>

        <ul>
          {movieInfo.ratings.map((rating, index) => (
            <li key={index}>
              {rating.Source === 'Internet Movie Database' ? 'IMDB' : rating.Source}
              : {rating.Value}
            </li>
          ))}
        </ul>
      </div>
  }
  </Fragment>
)

export default MovieCard

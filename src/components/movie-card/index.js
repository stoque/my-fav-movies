import React, { Fragment } from 'react'
import styled from 'styled-components'
import ErrorMessage from '../error-message'

const MovieCard = ({ movieInfo, hasSearched }) => (
  <Fragment>
    {movieInfo.title
      ?
      <Wrapper>
        <Title>{movieInfo.title} <span>({movieInfo.year})</span></Title>

        <Poster src={movieInfo.poster} alt={`${movieInfo.title} poster`} />

        <RatingList>
          {movieInfo.ratings.map((rating, index) => (
            <RatingItem key={index} className={rating.Source.split(' ')[0].toLowerCase()}>
              {rating.Source === 'Internet Movie Database' ? 'IMDB' : rating.Source}
              : {rating.Value}
            </RatingItem>
          ))}
        </RatingList>

        {/* <p>{movieInfo.director}</p>
        <p>{movieInfo.actors}</p>
        <p>{movieInfo.plot}</p> */}
      </Wrapper>
      :
      <ErrorMessage hasSearched={hasSearched}/>
    }
  </Fragment>
)

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 24px;
  span {
    font-size: 16px;
  }
`

const Poster = styled.img`
  margin: 10px 0;
  width: 200px;
`

const RatingList = styled.ul`
  list-style: none;
`

const RatingItem = styled.li`
  &.internet {
    background: blue;
  }

  &.rotten {
    background: red;
  }

  &.metacritic {
    background: pink;
  }
`

export default MovieCard

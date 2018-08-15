import React, { Fragment } from 'react'
import styled from 'styled-components'
import ErrorMessage from '../error-message'

const MovieCard = ({ movieInfo, hasSearched }) => (
  <Fragment>
    <Container>
      <Overlay background={movieInfo.poster}/>
      {movieInfo.title
        ?
        <Wrapper>
          <Title>{movieInfo.title} <span>({movieInfo.year})</span></Title>

          <Poster src={movieInfo.poster} alt={`${movieInfo.title} poster`} />

          <p>{movieInfo.director}</p>
          <p>{movieInfo.actors}</p>
          <p>{movieInfo.plot}</p>

          <RatingList>
            {movieInfo.ratings.map((rating, index) => (
              <RatingItem key={index}>
                <span>
                  {rating.Source === 'Internet Movie Database' ? 'IMDB' : rating.Source}:
                </span>
                {rating.Value}
              </RatingItem>
            ))}
          </RatingList>
        </Wrapper>
        :
        <ErrorMessage hasSearched={hasSearched}/>
      }
    </Container>
  </Fragment>
)

const Container = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
`

const Overlay = styled.div`
  background: url(${props => props.background}) center center no-repeat;
  background-size: cover;
  filter: blur(30px);
  height: 100%;
  position: absolute;
  transform: scale(1.2);
  width: 100%;
  z-index: -1;
`

const Wrapper = styled.div`
  align-items: center;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  flex-direction: column;
  display: flex;
  margin: 80px 0;
  padding: 20px;
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
  width: 100%
`

const RatingItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  span {
    display: inline-block;
    font-weight: bold;
    margin: 0 4px 0 0;
    width: 169px;
  }
`

export default MovieCard

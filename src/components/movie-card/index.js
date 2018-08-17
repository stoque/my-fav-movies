import React from 'react'
import styled from 'styled-components'
import ReactStars from 'react-stars'

import RatingUtil from '../../utils/rating'

const MovieCard = ({ movieInfo, hasSearched }) => (
  <Card>
    <Title>
      {movieInfo.title} <span>({movieInfo.year})</span>
    </Title>

    <Header>
      <Poster src={movieInfo.poster} alt={`${movieInfo.title} poster`} />
      <RatingList>
        {movieInfo.ratings.map((rating, index) => (
          <RatingItem key={index}>
            <span>
              {rating.Source === 'Internet Movie Database' ? 'IMDB' : rating.Source}
            </span>
            {rating.Value}
            <ReactStars
              count={10}
              value={RatingUtil.normalizeRating(rating.Value)}
              edit={false}
              size={14}
            />
          </RatingItem>
        ))}
      </RatingList>
    </Header>

    <Text>{movieInfo.director}</Text>
    <Text>{movieInfo.actors}</Text>
    <Text>{movieInfo.plot}</Text>
  </Card>
)

const Card = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
  color: #000;
  flex-direction: column;
  display: flex;
  padding: 20px 10px;
`

const Title = styled.h2`
  color: ${props => props.color};
  font-size: 24px;
  margin: 0 0 10px 0;
  span {
    font-size: 16px;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
`

const Poster = styled.img`
  align-self: center;
  width: 48%;
`

const RatingList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-between;
  width: 48%;
`

const RatingItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
  span {
    font-weight: normal;
  }
`

const Text = styled.p`
  text-align: center;
  font-size: 14px;
  &:not(:last-child) {
    margin: 0 0 8px 0;
  }
`

export default MovieCard

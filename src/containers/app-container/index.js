import React, { Component } from 'react'
import axios from 'axios'
import { injectGlobal } from 'styled-components'

import Search from '../../components/search'
import MovieCard from '../../components/movie-card'

class AppContainer extends Component {
  constructor () {
    super()
    this.state = {
      hasSearched: false,
      movieInfo: {
        poster: '',
        title: '',
        year: '',
        director: '',
        actors: '',
        plot: '',
        ratings: []
      }
    }
  }

  loadMovie = async (movieName = 'pulp fiction') => {
    const apiKey = 'cebb719e';
    const movieInfo = (await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)).data
    console.log(movieInfo)
    this.setState({
      hasSearched: true,
      movieInfo: {
        poster: movieInfo.Poster,
        title: movieInfo.Title,
        year: movieInfo.Year,
        director: movieInfo.Director,
        actors: movieInfo.Actors,
        plot: movieInfo.Plot,
        ratings: movieInfo.Ratings
      }
    })
  }

  handleSearch = (event) => {
    event.preventDefault()
    const searchValue = event.target.search.value
    this.loadMovie(searchValue)
  }

  render () {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <MovieCard
          movieInfo={this.state.movieInfo}
          hasSearched={this.state.hasSearched}
        />
      </div>
    )
  }
}

injectGlobal `
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background: #000;
    color: #576574;
    font-family: 'Open Sans', sans-serif;
    padding: 0 20px;
  }
`

export default AppContainer

import React, { Component } from 'react'
import axios from 'axios'

import Search from '../../components/search'
import MovieCard from '../../components/movie-card'

class AppContainer extends Component {
  constructor () {
    super()
    this.state = {
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

  componentDidMount () {
    this.loadMovie('pulp fiction')
  }

  loadMovie = async (movieName) => {
    const apiKey = 'cebb719e';
    const movieInfo = (await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)).data
    console.log(movieInfo)
    this.setState({
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
        <MovieCard movieInfo={this.state.movieInfo} />
      </div>
    )
  }
}

export default AppContainer
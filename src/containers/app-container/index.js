import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { injectGlobal } from 'styled-components'

import Search from '../../components/search'
import MovieCard from '../../components/movie-card'
import ErrorMessage from '../../components/error-message'
import Spinner from '../../components/spinner'
import Background from '../../components/background'

class AppContainer extends Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      hasSearched: false,
      movieInfo: null
    }
  }

  loadMovie = async (movieName = 'pulp fiction') => {
    this.setState({loading: true})
    const apiKey = 'cebb719e';
    const data = (await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)).data
    if (data.Response === 'True') {
      this.setState({
        hasSearched: true,
        movieInfo: {
          poster: data.Poster,
          title: data.Title,
          year: data.Year,
          director: data.Director,
          actors: data.Actors,
          plot: data.Plot,
          ratings: data.Ratings,
        }
      })
    } else {
      this.setState({
        hasSearched: true,
        movieInfo: null,
      })
    }
    this.setState({loading: false})
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
        {this.state.movieInfo
          ?
          <Fragment>
            <MovieCard
              movieInfo={this.state.movieInfo}
              hasSearched={this.state.hasSearched}
            />
            <Background image={this.state.movieInfo.poster}/>
          </Fragment>
          :
          <ErrorMessage hasSearched={this.state.hasSearched} />
        }
        <Spinner loading={this.state.loading} />
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
    background: #EEEEEE;
    color: #576574;
    font-family: 'Open Sans', sans-serif;
    padding: 0 20px;
  }
`

export default AppContainer

import React from 'react'
import { injectGlobal } from 'styled-components'
import AppContainer from './containers/app-container'

const App = () => (
  <AppContainer />
)

injectGlobal`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  body {
    background: #eee;
    color: #576574;
    font-family: 'Open Sans', sans-serif;
    padding: 0 20px;
  }
`

export default App

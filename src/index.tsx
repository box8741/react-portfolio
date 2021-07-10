import React from 'react'
import ReactDOM from 'react-dom'
import {CssBaseline} from '@material-ui/core'
import {ThemeProvider} from 'styled-components'

import {theme} from './theme/styledTheme'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()

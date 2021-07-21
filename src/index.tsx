import React from 'react'
import ReactDOM from 'react-dom'
import {CssBaseline} from '@material-ui/core'
import {ThemeProvider} from 'styled-components'

import GlobalStyle from './common/GlobalStyle'
import {theme} from './theme/styledTheme'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()

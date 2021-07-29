import React from 'react'
import ReactDOM from 'react-dom'
import {CssBaseline} from '@material-ui/core'
import {ThemeProvider} from 'styled-components'
import {Provider} from 'react-redux'

import GlobalStyle from './common/GlobalStyle'
import {theme} from './theme/styledTheme'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()

import * as React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {Provider} from 'react-redux'
import {MuiThemeProvider} from '@material-ui/core'

import store from './redux/store'
import {theme} from './theme/styledTheme'
import marterialTheme from './theme/marterialTheme'
import Router from './router/Router'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={marterialTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </MuiThemeProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App

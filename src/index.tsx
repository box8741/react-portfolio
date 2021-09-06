import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import {CssBaseline} from '@material-ui/core'
import {ThemeProvider} from 'styled-components'
import {Provider} from 'react-redux'

import mkUtils from './common/utils'
import GlobalStyle from './common/GlobalStyle'
import {theme} from './theme/styledTheme'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'

if (mkUtils.Browser === 'IE') {
  location.href = 'microsoft-edge:' + window.location
  setTimeout(function () {
    location.href = 'https://go.microsoft.com/fwlink/?linkid=2135547'
  })
}

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

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import {CssBaseline} from '@material-ui/core'

import mkUtils from './common/utils'
import GlobalStyle from './common/GlobalStyle'
import App from './App'
import reportWebVitals from './reportWebVitals'

if (mkUtils.Browser === 'IE') {
  location.href = 'microsoft-edge:' + window.location
  setTimeout(function () {
    location.href = 'https://go.microsoft.com/fwlink/?linkid=2135547'
  })
}

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()

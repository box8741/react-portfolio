import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {MuiThemeProvider} from '@material-ui/core'

import mkConst from '../common/constants'
import theme from '../theme/marterialTheme'

// error pages
import NotFoundPage from '../pages/NotFoundPage'

// pages
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

const Router = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/" exact component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default Router

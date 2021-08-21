import * as React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {MuiThemeProvider} from '@material-ui/core'
import styled from 'styled-components'

import mkConst from '../common/constants'
import theme from '../theme/marterialTheme'

// error pages
import NotFoundPage from '../pages/NotFoundPage'

// pages
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

const Router = () => {
  return (
    <Layout>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/main" component={MainPage} />
            {/* <Route path="/" exact component={LoginPage} /> */}
            <Route path="/" exact>
              <Redirect to="/main" />
            </Route>
            <Redirect to="/main" />
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Layout>
  )
}

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
`

export default Router

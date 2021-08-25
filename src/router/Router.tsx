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
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/main" component={MainPage} />
            {/* <Route path="/" exact component={LoginPage} /> */}
            <Route path="/" exact>
              <Redirect to="/main" />
            </Route>
            {/* <Route component={NotFoundPage} /> */}
          </Layout>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

const Layout = styled.div`
  height: 100%;
  background: ${({theme}) => theme.color.background.default};
`

export default Router

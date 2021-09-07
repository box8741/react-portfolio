import * as React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {MuiThemeProvider} from '@material-ui/core'
import styled from 'styled-components'

import mkConst from '../common/constants'
import mkUtils from '../common/utils'
import theme from '../theme/marterialTheme'
import {TitleBar} from '../components'

// error pages
import NotSupportPage from '../pages/NotSupportPage'

// pages
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

const Router = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/" component={MainPage} />
            {/* <Route path="/notSupport" component={NotSupportPage} /> */}
            {/* <Route path="/" exact component={LoginPage} /> */}
            <Redirect to="/" />
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

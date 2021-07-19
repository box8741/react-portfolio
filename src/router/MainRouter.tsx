import {useState} from 'react'
import {RouteComponentProps, Route, Switch, withRouter, Redirect} from 'react-router-dom'

import mkConst from '../common/constants'
import theme from '../theme/marterialTheme'

// error pages
import NotFoundPage from '../pages/NotFoundPage'

// pages
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import WorksPage from '../pages/WorksPage'

const MainRouter = (props: RouteComponentProps) => {
  const {match} = props

  return (
    <Switch>
      <Route path={`${match.url}`} exact component={HomePage} />
      <Route path={`${match.url}/about`} component={AboutPage} />
      <Route path={`${match.url}/works`} component={WorksPage} />
    </Switch>
  )
}

export default withRouter(MainRouter)

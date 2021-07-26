import * as React from 'react'
import {RouteComponentProps, Route, Switch, withRouter, Redirect} from 'react-router-dom'

import mkConst from '../common/constants'

// pages
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ExperiencePage from '../pages/ExperiencePage'
import WorksPage from '../pages/WorksPage'

const MainRouter = (props: RouteComponentProps) => {
  const {match} = props

  return (
    <Switch>
      <Route path={`${match.url}/home`} component={HomePage} />
      <Route path={`${match.url}/about`} component={AboutPage} />
      <Route path={`${match.url}/experience`} component={ExperiencePage} />
      <Route path={`${match.url}/works`} component={WorksPage} />
      <Redirect to={`${match.url}/home`} />
    </Switch>
  )
}

export default withRouter(MainRouter)

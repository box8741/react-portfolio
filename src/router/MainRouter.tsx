import {useState} from 'react'
import {RouteComponentProps, Route, Switch, withRouter} from 'react-router-dom'

import mkConst from '../common/constants'
import theme from '../theme/marterialTheme'

// pages
import HomePage from '../pages/HomePage'

const MainRouter = (props: RouteComponentProps) => {
  const {match} = props

  return (
    <Switch>
      <Route path={`${match.url}`} exact component={HomePage} />
    </Switch>
  )
}

export default withRouter(MainRouter)

import * as React from 'react'
import _ from 'lodash'
import {RouteProps, Route, Switch, Redirect} from 'react-router-dom'
import styled, {css} from 'styled-components'

import mkConst from '../common/constants'
import mkUtils from '../common/utils'
import {useAppSelector, useAppDispatch} from '../hooks/useRedux'
import {TitleBar, Drawer, Header} from '../components'

// error pages
import NotSupportPage from '../pages/NotSupportPage'

// pages
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ExperiencePage from '../pages/ExperiencePage'
import WorksPage from '../pages/WorksPage'

const Router = (props: RouteProps) => {
  const mainRef = React.useRef<HTMLDivElement>(null)
  const [isVisible, setVisible] = React.useState(!(innerWidth <= 1024))
  const [isMobile, setMobile] = React.useState(innerWidth <= 1024)

  React.useEffect(() => {
    setVisible(!isMobile)
  }, [isMobile])

  const handleResize = _.debounce(() => {
    setMobile(innerWidth <= 1024)
  }, 32)

  React.useEffect(() => {
    if (mainRef.current && mkUtils.isElectron) {
      mainRef.current.style.overflowY = 'auto'
    }
    addEventListener('resize', handleResize)
    return () => removeEventListener('resize', handleResize)
  }, [])

  return (
    <Layout>
      {mkUtils.isElectron && <TitleBar />}
      <Drawer {...{isVisible, isMobile, setVisible}} />
      <MainLayout ref={mainRef} {...{isVisible, isMobile}}>
        {isMobile && <Header onDrawerVisible={setVisible} />}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/experience" component={ExperiencePage} />
          <Route path="/works" component={WorksPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </MainLayout>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${({theme}) => theme.color.background.default};
`
const MainLayout = styled.div<{isVisible: boolean; isMobile: boolean}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  transition: width 0.3s ease-in-out, margin-left 0.3s ease-in-out;
  ${({isVisible, isMobile}) => {
    if (isVisible && !isMobile) {
      return css`
        width: calc(100% - 300px);
        margin-left: 300px;
      `
    }
  }}
`

export default Router

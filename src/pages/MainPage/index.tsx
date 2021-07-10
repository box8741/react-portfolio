import {useState, useEffect, useCallback} from 'react'
import _ from 'lodash'
import {RouteComponentProps, Route, Switch, withRouter} from 'react-router-dom'
import styled, {css} from 'styled-components/macro'
import {MuiThemeProvider, makeStyles} from '@material-ui/core'

import mkConst from '../../common/constants'
import theme from '../../theme/marterialTheme'
import {Drawer, Header} from '../../components'

import MainRouter from '../../router/MainRouter'

const MainPage = (props: RouteComponentProps) => {
  const [isVisible, setVisible] = useState(!(innerWidth <= 1024))
  const [isMobile, setMobile] = useState(innerWidth <= 1024)

  useEffect(() => {
    setVisible(!isMobile)
  }, [isMobile])

  const handleResize = _.debounce(() => {
    setMobile(innerWidth <= 1024)
  }, 32)

  useEffect(() => {
    addEventListener('resize', handleResize)
    return () => removeEventListener('resize', handleResize)
  }, [])

  return (
    <Layout>
      <Drawer {...{isVisible, isMobile, setVisible}} />
      {isMobile && <Header onDrawerVisible={setVisible} />}
      <MainLayout {...{isVisible, isMobile}}>
        <MainRouter />
      </MainLayout>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${theme.palette.background.paper};
`
const MainLayout = styled.div<{isVisible: boolean; isMobile: boolean}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  transition: all 0.4s ease-in-out;
  ${({isVisible, isMobile}) => {
    if (isVisible && !isMobile) {
      return css`
        width: calc(100% - 300px);
        margin-left: 300px;
      `
    }
  }}
`

export default MainPage

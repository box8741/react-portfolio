import * as React from 'react'
import _ from 'lodash'
import {RouteComponentProps} from 'react-router-dom'
import styled, {css} from 'styled-components'

import mkConst from '../../common/constants'
import {Drawer, Header} from '../../components'

import MainRouter from '../../router/MainRouter'

const MainPage = (props: RouteComponentProps) => {
  const [isVisible, setVisible] = React.useState(!(innerWidth <= 1024))
  const [isMobile, setMobile] = React.useState(innerWidth <= 1024)

  React.useEffect(() => {
    setVisible(!isMobile)
  }, [isMobile])

  const handleResize = _.debounce(() => {
    setMobile(innerWidth <= 1024)
  }, 32)

  React.useEffect(() => {
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
  background: ${({theme}) => theme.color.background.default};
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

import * as React from 'react'
import _ from 'lodash'
import styled, {css} from 'styled-components'
import {RouteComponentProps} from 'react-router-dom'

import mkConst from '../../common/constants'
import mkUtils from '../../common/utils'
import action from '../../redux/action'
import {useAppSelector, useAppDispatch} from '../../hooks/useRedux'
import {TitleBar, Drawer, Header} from '../../components'
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
    <>
      {mkUtils.isElectron && <TitleBar />}
      <Drawer {...{isVisible, isMobile, setVisible}} />
      <MainLayout {...{isVisible, isMobile}}>
        {isMobile && <Header onDrawerVisible={setVisible} />}
        <TempLayout {...{isMobile}}>
          <MainRouter />
        </TempLayout>
      </MainLayout>
    </>
  )
}

const MainLayout = styled.div<{isVisible: boolean; isMobile: boolean}>`
  position: relative;
  top: ${mkConst.titleBarHeight}px;
  width: 100%;
  height: calc(100% - ${mkConst.titleBarHeight}px);
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
const TempLayout = styled.div<{isMobile: boolean}>`
  width: 100%;
  height: 100%;
  ${({isMobile}) => {
    if (isMobile) {
      return css`
        height: calc(100% - 80px);
      `
    }
  }}
`

export default MainPage

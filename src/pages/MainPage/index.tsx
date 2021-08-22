import * as React from 'react'
import _ from 'lodash'
import styled, {css} from 'styled-components'
import {RouteComponentProps} from 'react-router-dom'

import mkConst from '../../common/constants'
import action from '../../redux/action'
import {useAppSelector, useAppDispatch} from '../../hooks/useRedux'
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
    <>
      <Drawer {...{isVisible, isMobile, setVisible}} />
      {isMobile && <Header onDrawerVisible={setVisible} />}
      <MainLayout {...{isVisible, isMobile}}>
        <MainRouter />
      </MainLayout>
    </>
  )
}

const MainLayout = styled.div<{isVisible: boolean; isMobile: boolean}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: width 0.4s ease-in-out, margin-left 0.4s ease-in-out;
  ${({isVisible, isMobile}) => {
    if (isVisible && !isMobile) {
      return css`
        width: calc(100% - 300px);
        margin-left: 300px;
      `
    }
    if (isMobile) {
      return css`
        height: calc(100% - 80px);
      `
    }
  }}
`

export default MainPage

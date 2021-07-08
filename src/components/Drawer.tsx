import {useState} from 'react'
import {Drawer as MarterialDrawer} from '@material-ui/core'
import * as Icon from '@material-ui/icons'
import styled, {css} from 'styled-components/macro'
import {RouteComponentProps, withRouter} from 'react-router-dom'

import mkConst from '../common/constants'
import theme from '../theme/marterialTheme'

type Props = RouteComponentProps & {
  isVisible: boolean
  isMobile: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer = (props: Props) => {
  const {isVisible, isMobile, setVisible, history} = props

  const _drawerContent = () => {
    return (
      <>
        <div>
          <Logo>Logo</Logo>
          <ItemLayout>
            <Item onClick={() => history.push('/main')}>
              <HomeIcon />
              Home
            </Item>
            <Item onClick={() => history.push('/main/about')}>
              <AboutIcon />
              About
            </Item>
            <Item onClick={() => history.push('/main/works')}>
              <WorksIcon />
              Works
            </Item>
            <Item>
              <ServicesIcon />
              Services
            </Item>
            <Item>
              <BlogIcon />
              Blog
            </Item>
          </ItemLayout>
        </div>
        <Etc>© 2021 Min Portfolio</Etc>
      </>
    )
  }

  return (
    <>
      <DrawerBackground onClick={() => setVisible(false)} {...{isVisible, isMobile}}></DrawerBackground>
      <DrawerContent isVisible={isVisible}>{_drawerContent()}</DrawerContent>
    </>
  )
}

const DrawerContent = styled.div<{isVisible: boolean}>`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  background: ${theme.palette.background.default};
  padding: 38px;
  border-right: 1px solid #4a4863;
  transition: margin-left 0.4s ease-in-out;
  margin-left: -300px
    ${props =>
      props.isVisible &&
      css`
        margin-left: 0;
      `};
`
const DrawerBackground = styled.div<{isVisible: boolean; isMobile: boolean}>`
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  z-index: 1;
  ${({isVisible, isMobile}) => {
    if (isVisible && isMobile) {
      return css`
        pointer-events: auto;
        opacity: 0.2;
      `
    }
  }}
`

const Logo = styled.div`
  font-size: 36px;
  font-weight: 900;
  color: white;
`
const ItemLayout = styled.div`
  margin: 130px 0px;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
  transition: color 200ms;
  &:hover {
    color: ${theme.palette.secondary.main};
  }
`
const tabIcon = css`
  font-size: 24px;
  margin-right: 16px;
  color: ${theme.palette.secondary.main};
`
const HomeIcon = styled(Icon.HomeOutlined)`
  ${tabIcon}
`
const AboutIcon = styled(Icon.HomeOutlined)`
  ${tabIcon}
`
const ServicesIcon = styled(Icon.HomeOutlined)`
  ${tabIcon}
`
const WorksIcon = styled(Icon.HomeOutlined)`
  ${tabIcon}
`
const BlogIcon = styled(Icon.HomeOutlined)`
  ${tabIcon}
`
const Etc = styled.span`
  color: #8e8e8e;
`

export default withRouter(Drawer)

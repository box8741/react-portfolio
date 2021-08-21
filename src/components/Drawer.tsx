import * as React from 'react'
import _ from 'lodash'
import styled, {css} from 'styled-components'
import * as IonIcon from '@styled-icons/ionicons-outline'
import {RouteComponentProps, withRouter} from 'react-router-dom'

import mkConst from '../common/constants'

type Props = RouteComponentProps & {
  isVisible: boolean
  isMobile: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer = (props: Props) => {
  const {isVisible, isMobile, setVisible, history} = props

  const tabList = [
    {name: 'Home', path: '/main/home', icon: () => <HomeIcon />},
    {name: 'About', path: '/main/about', icon: () => <AboutIcon />},
    {name: 'Experience', path: '/main/experience', icon: () => <ExperienceIcon />},
    {name: 'Works', path: '/main/works', icon: () => <WorksIcon />},
  ]

  const activeRoute = (path: string) => {
    return location.pathname.indexOf(path) > -1
  }

  const _drawerContent = () => {
    return (
      <>
        <div>
          <Logo>Min</Logo>
          <ItemLayout>
            {tabList.map((i, j) => {
              return (
                <Item key={j} onClick={() => history.push(i.path)} active={activeRoute(i.path)}>
                  <i.icon />
                  {i.name}
                </Item>
              )
            })}
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
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  background: ${({theme}) => theme.color.background.primary};
  padding: 38px;
  border-right: 1px solid #4a4863;
  transition: margin-left 0.2s ease-in-out;
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
const tabIcon = css`
  width: 20px;
  height: 20px;
  color: ${({theme}) => theme.color.font.secondary};
  margin-right: 16px;
`
const Item = styled.div<{active?: boolean}>`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 26px;
  cursor: pointer;
  transition: color 200ms;
  ${({active}) =>
    active &&
    css`
      color: ${({theme}) => theme.color.font.secondary};
    `}
  &:hover {
    color: ${({theme}) => theme.color.font.secondary}aa;
  }
`
const HomeIcon = styled(IonIcon.Home)`
  ${tabIcon}
`
const AboutIcon = styled(IonIcon.Person)`
  ${tabIcon}
`
const ExperienceIcon = styled(IonIcon.School)`
  ${tabIcon}
`
const WorksIcon = styled(IonIcon.Layers)`
  ${tabIcon}
`
const Etc = styled.span`
  color: #8e8e8e;
`

export default withRouter(Drawer)

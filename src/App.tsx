import {} from 'react'
import styled from 'styled-components'
import {Icon, IconButton} from '@material-ui/core'

import mConst from './common/constants'

const App = () => {
  const {isMobile} = mConst.Hooks()
  return (
    <Container>
      <Header>
        {isMobile ? (
          <>
            <DrawerBtn>
              <Icon fontSize="large">sort</Icon>
            </DrawerBtn>
            <Logo href="/">Portfolio</Logo>
          </>
        ) : (
          <div>
            <Logo href="/">Portfolio</Logo>
            <TabBtn>information</TabBtn>
            <TabBtn>project</TabBtn>
            <TabBtn>skill</TabBtn>
            <TabBtn>home</TabBtn>
          </div>
        )}
        <a target="_blink" href="https://github.com/box8741/react-portfolio">
          <GitBtn src="./assets/images/icon_github.png" />
        </a>
      </Header>

      <span>content</span>
    </Container>
  )
}

const Container = styled('div')`
  width: 100vw;
  min-height: 100vh;
  background: ${mConst.themeColorDark};
`
const Header = styled('div')`
  width: 100vw;
  height: 96px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background: ${mConst.themeColorNormal};
`
const Logo = styled('a')`
  font-size: 30px;
  font-weight: 500;
  text-decoration: none;
`
const DrawerBtn = styled(IconButton)`
  width: 38px;
  height: 38px;
`
const TabBtn = styled('a')`
  font-size: 16px;
  margin-left: 18px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: white;
  }
`
const GitBtn = styled('img')`
  width: 38px;
  height: 38px;
  cursor: pointer;
`

export default App

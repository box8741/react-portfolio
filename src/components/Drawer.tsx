import {useState} from 'react'
import {Drawer as MarterialDrawer} from '@material-ui/core'
import * as Icon from '@material-ui/icons'
import styled, {css} from 'styled-components/macro'
import {RouteComponentProps, withRouter} from 'react-router-dom'

import mkConst from '../common/constants'
import theme from '../theme/marterialTheme'

type Props = RouteComponentProps & {
  isVisible?: boolean
}

const Drawer = (props: Props) => {
  const {isVisible = true, history} = props
  const {isMobile} = mkConst.Hooks()

  return (
    <MarterialDrawer PaperProps={{style: {borderRight: 0}}} open={isVisible} anchor="left" variant={'persistent'}>
      <Layout>
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
            <Item>
              <ServicesIcon />
              Services
            </Item>
            <Item>
              <WorksIcon />
              Works
            </Item>
            <Item>
              <BlogIcon />
              Blog
            </Item>
          </ItemLayout>
        </div>

        <Etc>© 2021 Bolby Template.</Etc>
      </Layout>
    </MarterialDrawer>
  )
}

const Layout = styled.div<{isVisible?: boolean}>`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 300px;
  justify-content: space-between;
  background: ${theme.palette.background.default};
  padding: 38px;
  border-right: 1px solid #4a4863;
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
const TabIcon = css`
  font-size: 24px;
  margin-right: 16px;
  color: ${theme.palette.secondary.main};
`
const HomeIcon = styled(Icon.HomeOutlined)`
  ${TabIcon}
`
const AboutIcon = styled(Icon.HomeOutlined)`
  ${TabIcon}
`
const ServicesIcon = styled(Icon.HomeOutlined)`
  ${TabIcon}
`
const WorksIcon = styled(Icon.HomeOutlined)`
  ${TabIcon}
`
const BlogIcon = styled(Icon.HomeOutlined)`
  ${TabIcon}
`
const Etc = styled.span`
  color: #8e8e8e;
`

export default withRouter(Drawer)

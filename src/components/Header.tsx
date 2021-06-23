import {useState} from 'react'
import {IconButton} from '@material-ui/core'
import * as Icon from '@material-ui/icons'
import styled, {css} from 'styled-components/macro'
import {RouteComponentProps, withRouter} from 'react-router-dom'

import mkConst from '../common/constants'
import theme from '../theme/marterialTheme'

type Props = RouteComponentProps & {
  onDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = (props: Props) => {
  const {onDrawerVisible} = props

  return (
    <Layout>
      <IconButton onClick={() => onDrawerVisible(true)}>
        <MenuIcon />
      </IconButton>
      <Logo>Logo</Logo>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background: ${theme.palette.background.default};
  padding: 12px 18px;
`
const Logo = styled.div`
  font-size: 36px;
  font-weight: 900;
  color: white;
  margin-left: 16px;
`
const MenuIcon = styled(Icon.Notes)`
  color: white;
  font-size: 34px;
`

export default withRouter(Header)

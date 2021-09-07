import * as React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import * as IonIcon from 'styled-icons/ionicons-outline'
import {IconButton} from '@material-ui/core'
import {RouteComponentProps, withRouter} from 'react-router-dom'

import mkConst from '../common/constants'

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
      <Logo>Min</Logo>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  height: 56px;
  z-index: 10;
  align-items: center;
  background: ${({theme}) => theme.color.background.primary}FA;
  padding: 12px 18px;
`
const Logo = styled.div`
  font-size: 28px;
  font-weight: 900;
  color: white;
  margin-left: 12px;
`
const MenuIcon = styled(IonIcon.Menu)`
  width: 28px;
  height: 28px;
  color: white;
`

export default withRouter(Header)

import {IconButton} from '@material-ui/core'
import * as IonIcon from 'styled-icons/ionicons-outline'
import styled from 'styled-components'
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
  /* position: sticky; */
  top: 0;
  left: 0;
  align-items: center;
  height: 80px;
  background: ${({theme}) => theme.color.background.primary};
  padding: 12px 18px;
`
const Logo = styled.div`
  font-size: 36px;
  font-weight: 900;
  color: white;
  margin-left: 16px;
`
const MenuIcon = styled(IonIcon.Menu)`
  width: 36px;
  height: 36px;
  color: white;
`

export default withRouter(Header)

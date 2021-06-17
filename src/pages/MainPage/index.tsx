import {} from 'react'
import {} from '@material-ui/core'
import styled from 'styled-components/macro'

import mkConst from '../../common/constants'
import theme from '../../theme/marterialTheme'
import {Header, Footer} from '../../components'

const MainPage = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <div style={{height: 3000}}>MainPage</div>
      </Content>
      <Footer />
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: ${theme.palette.primary.light};
`
const Content = styled.div`
  display: flex;
  flex: 1;
`

export default MainPage

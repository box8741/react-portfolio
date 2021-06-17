import {} from 'react'
import {} from '@material-ui/core'
import styled from 'styled-components/macro'

import theme from '../theme/marterialTheme'

const Footer = () => {
  return (
    <Layout>
      <Content>
        <span>dwqdqw</span>
        {/* <EtcContent>
          <span>dqwdwq</span>
        </EtcContent> */}
      </Content>
    </Layout>
  )
}
const Layout = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;
  padding: 0px 24px;
  background: ${theme.palette.primary.dark};
`
const Content = styled.div`
  display: flex;
  flex: 1;
  max-width: 1200px;
`
const EtcContent = styled.div`
  display: flex;
  align-self: flex-end;
  width: 200px;
  background: white;
`

export default Footer

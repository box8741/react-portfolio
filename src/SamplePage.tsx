import {} from 'react'
import {} from '@material-ui/core'
import styled from 'styled-components/macro'

import mkConst from './common/constants'
import theme from './theme/marterialTheme'

const SamplePage = () => {
  return (
    <Layout>
      <span>SamplePage</span>
    </Layout>
  )
}

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
`

export default SamplePage

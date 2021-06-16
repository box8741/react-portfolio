import {} from 'react'
import {} from '@material-ui/core'
import styled from 'styled-components'

import mkConst from '../../common/constants'

const ErrorPage = () => {
  return (
    <Layout>
      <ErrorText>Not Found</ErrorText>
    </Layout>
  )
}

const Layout = styled('div')`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
`
const ErrorText = styled('span')`
  font-size: 24px;
  font-weight: 500;
  margin-top: 20vh;
`

export default ErrorPage

import * as React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import mkConst from '../common/constants'

const TitleBar = () => {
  return (
    <Layout>
      <Title>React-Portfolio</Title>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: ${mkConst.titleBarHeight}px;
  z-index: 9999;
  align-items: center;
  background: #5e5c7f;
  user-select: none;
  -webkit-user-select: none;
  -webkit-app-region: drag;
`
const Title = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
`

export default TitleBar

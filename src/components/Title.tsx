import * as React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import mkConst from '../common/constants'

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Title = ({children, style}: Props) => {
  return (
    <TitleText style={style}>
      <TitleImg src={'https://cdn.pixabay.com/photo/2019/04/10/11/56/watercolour-4116932_1280.png'} />
      {children}
    </TitleText>
  )
}
const TitleText = styled.div`
  position: relative;
  font-size: 38px;
  font-weight: 900;
  color: ${({theme}) => theme.color.font.primary};
  margin: 28px;
`
const TitleImg = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: -25px;
  top: -15px;
  opacity: 0.4;
`

export default Title

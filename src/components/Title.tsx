import {ReactNode, useState} from 'react'
import {IconButton} from '@material-ui/core'
import * as Icon from '@material-ui/icons'
import styled, {css} from 'styled-components/macro'

import mkConst from '../common/constants'
import theme from '../theme/marterialTheme'

type Props = {
  children: ReactNode
}

const Title = ({children}: Props) => {
  return (
    <TitleText>
      <TitleImg src={'https://cdn.pixabay.com/photo/2019/04/10/11/56/watercolour-4116932_1280.png'} />
      {children}
    </TitleText>
  )
}
const TitleText = styled.div`
  position: relative;
  font-size: 38px;
  font-weight: 900;
  color: ${theme.palette.background.default};
  margin: 28px 38px;
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

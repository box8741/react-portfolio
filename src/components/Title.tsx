import * as React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import mkConst from '../common/constants'

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Title = ({children, style}: Props) => {
  return <TitleText style={style}>{children}</TitleText>
}

const TitleText = styled.div`
  position: relative;
  font-size: 38px;
  font-weight: 900;
  color: ${({theme}) => theme.color.font.primary};
  &::before {
    display: block;
    position: absolute;
    content: '';
    background: url('/assets/svgs/dot.svg');
    object-fit: cover;
    width: 37px;
    height: 37px;
    left: -14px;
    top: -10px;
  }
`

export default Title

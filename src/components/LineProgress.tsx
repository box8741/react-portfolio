import styled, {keyframes} from 'styled-components/macro'

import mkConst from '../common/constants'

type Props = {
  className?: string
  color?: string
  percent?: number
}
type RercentProps = {
  color?: string
  percent?: number
}

const LineProgress = (props: Props) => {
  const {className, color, percent} = props
  return (
    <Layout className={className}>
      <Percent {...{color, percent}} />
    </Layout>
  )
}

const showAnimation = (percent?: number) => keyframes`
  from{
    width:0
  }to{
    width: ${percent}%
  }
`
const Layout = styled.div`
  height: 7px;
  background: #eeeeee;
  border-radius: 40px;
  overflow: hidden;
`
const Percent = styled.div<RercentProps>`
  height: 100%;
  background: ${props => props.color || '#999999'};
  border-radius: 40px;
  animation: ${props => showAnimation(props.percent)} 0.7s forwards;
`

export default LineProgress

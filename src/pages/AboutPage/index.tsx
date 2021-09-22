import * as React from 'react'
import _ from 'lodash'
import styled, {css} from 'styled-components'
import * as SimpleIcon from 'styled-icons/simple-icons'

import mkConst from '../../common/constants'
import action from '../../redux/action'
import {useAppSelector, useAppDispatch} from '../../hooks/useRedux'
import {Title, LineProgress} from '../../components'

import avatarSvg from '../../assets/svgs/avatar.svg'

interface GraphItemProps {
  name?: string
  percent?: number
  color?: string
}

const AboutPage = () => {
  const _renderGraphItem = ({name, percent, color}: GraphItemProps) => {
    return (
      <GraphItemWrap>
        <GraphItemInfoWrap>
          <GraphItemTitle>{name}</GraphItemTitle>
          <GraphItemPercentText>{percent}%</GraphItemPercentText>
        </GraphItemInfoWrap>
        <GraphItemProgress color={color} percent={percent} />
      </GraphItemWrap>
    )
  }

  return (
    <Layout>
      <EachWrap>
        <Title>About Me</Title>
        <InfoLayout>
          <Avatar src={avatarSvg} />
          <InfoContentLayout>
            <InfoText>
              {`저의 좌우명은 ‘능력은 부딪치는 만큼 보인다’입니다.
해보지 않고는 모른다는 말이 있듯이 여러 가지의 경험을 통해 지식을 쌓고 커뮤니케이션 능력을 올리고 있습니다.
저는 직장에서 Typescript, Deep Linking, Redux 등 많은 경험을 해보았으며 이외에도 React, Electron 을 공부하며 자기개발을 하고 있습니다.
개발자들 사이에서 그 사람 잘하더라라는 말을 할만한 개발자가 되기 위해 노력하고 있습니다.`}
            </InfoText>
            <InfoGraphLayout>
              <GraphItemLayout>
                {_renderGraphItem({name: 'React', percent: 80, color: '#61DBFB'})}
                {_renderGraphItem({name: 'React native', percent: 95, color: '#0097a7'})}
                {_renderGraphItem({name: 'Android', percent: 68, color: '#78C257'})}
              </GraphItemLayout>
            </InfoGraphLayout>
          </InfoContentLayout>
        </InfoLayout>

        <ItemLayout>
          <JavascriptIcon />
          <Html5Icon />
          <Css3Icon />
          <TypescriptIcon />
          <ReactLogoIcon />
          <JavaIcon />
          <AndroidIcon />
          <ElectronIcon />
        </ItemLayout>
      </EachWrap>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.color.background.default};
`
const EachWrap = styled.div`
  display: flex;
  max-width: ${({theme}) => `${theme.size.desktop}px`};
  flex-direction: column;
  justify-content: center;
  margin: 0 16px;
`
const Avatar = styled.img`
  width: 160px;
  height: 160px;
  margin-top: 18px;
  margin-right: 34px;
  ${({theme}) => theme.media.tablet`
      margin-bottom: 32px;
      margin-right: 0px;
    `}
`
const InfoLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 32px 16px;
  ${({theme}) => theme.media.tablet`
      flex-direction: column;
      align-items: center;
    `}
`
const InfoContentLayout = styled.div`
  display: flex;
  flex-direction: row wrap;
  background: white;
  max-width: 100%;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 1px 1px 32px #dddddd;
  ${({theme}) => theme.media.tablet`
      flex-direction: column;
    `}
`
const InfoText = styled.span`
  display: flex;
  flex: 1;
  font-size: 16px;
  color: ${({theme}) => theme.color.font.primary};
  margin-right: 28px;
  white-space: pre-wrap;
  letter-spacing: 1px;
  ${({theme}) => theme.media.tablet`
      margin-bottom: 18px;
    `}
`
const InfoGraphLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const GraphItemLayout = styled.div``
const GraphItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`
const GraphItemInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const GraphItemTitle = styled.span`
  font-size: 16px;
  font-weight: 800;
  color: ${({theme}) => theme.color.font.primary};
`
const GraphItemPercentText = styled.span`
  font-size: 14px;
  color: ${({theme}) => theme.color.font.primary};
`
const GraphItemProgress = styled(LineProgress)`
  margin-top: 12px;
`
const ItemLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px 12px;
  padding: 48px 0;
  ${({theme}) => theme.media.mobile`
    grid-template-columns: repeat(2, 1fr);
  `}
`
const IconStyle = css`
  width: 50px;
  height: 50px;
  color: black;
  opacity: 0.25;
  justify-self: center;
`
const JavascriptIcon = styled(SimpleIcon.Javascript)`
  ${IconStyle}
`
const Html5Icon = styled(SimpleIcon.Html5)`
  ${IconStyle}
`
const Css3Icon = styled(SimpleIcon.Css3)`
  ${IconStyle}
`
const TypescriptIcon = styled(SimpleIcon.Typescript)`
  ${IconStyle}
`
const JavaIcon = styled(SimpleIcon.Java)`
  ${IconStyle}
`
const ReactLogoIcon = styled(SimpleIcon.ReactLogo)`
  ${IconStyle}
`
const AndroidIcon = styled(SimpleIcon.Android)`
  ${IconStyle}
`
const ElectronIcon = styled(SimpleIcon.Electron)`
  ${IconStyle}
`

export default AboutPage

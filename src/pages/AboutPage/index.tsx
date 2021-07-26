import styled, {css} from 'styled-components/macro'
import * as SimpleIcon from 'styled-icons/simple-icons'

import mkConst from '../../common/constants'
import {Title, LineProgress} from '../../components'

const AboutPage = () => {
  return (
    <Layout>
      <Title>About Me</Title>

      <InfoLayout>
        <Avatar src={'/assets/images/avatar.png'} />
        <InfoContentLayout>
          <InfoText>
            Dolore irure id do culpa proident exercitation sint sunt. Adipisicing proident ex et enim incididunt aliqua
            tempor velit. Commodo in Lorem fugiat laboris deserunt. Aliqua duis excepteur aliquip minim magna fugiat
          </InfoText>
          <InfoGraphLayout>
            <GraphItemLayout>
              <GraphItemWrap>
                <GraphItemInfoWrap>
                  <GraphItemTitle>Development</GraphItemTitle>
                  <GraphItemPercentText>84%</GraphItemPercentText>
                </GraphItemInfoWrap>
                <GraphItemProgress color="#F8D270" percent={84} />
              </GraphItemWrap>
              <GraphItemWrap>
                <GraphItemInfoWrap>
                  <GraphItemTitle>UI/UX Design</GraphItemTitle>
                  <GraphItemPercentText>95%</GraphItemPercentText>
                </GraphItemInfoWrap>
                <GraphItemProgress color="#EC5A65" percent={95} />
              </GraphItemWrap>
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
      </ItemLayout>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({theme}) => `${theme.size.desktop}px`};
  min-height: 100%;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  padding: 0px 36px;
  background: ${({theme}) => theme.color.background.default};
  ${({theme}) => theme.media.tablet`
      justify-content: flex-start;
    `}
`
const Avatar = styled.img`
  width: 150px;
  height: 150px;
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
  margin: 32px 0px;
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
const InfoText = styled.div`
  display: flex;
  flex: 1;
  font-size: 16px;
  color: ${({theme}) => theme.color.font.primary};
  margin-right: 28px;
  line-height: 28px;
  letter-spacing: 1px;
  word-break: normal;
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
  margin-top: 32px;
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

export default AboutPage

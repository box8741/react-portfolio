import * as React from 'react'
import _ from 'lodash'
import styled, {keyframes, css} from 'styled-components'
import * as IonIcons from 'styled-icons/ionicons-outline'

import mkConst from '../../common/constants'
import action from '../../redux/action'
import {useAppSelector, useAppDispatch} from '../../hooks/useRedux'
import {Title} from '../../components'

type ExpeItemProps = {
  year?: string
  title?: string
  content?: string
  iconType?: 'school' | 'work'
}

const Experience = () => {
  const _renderExpeItem = ({year, title, content, iconType = 'school'}: ExpeItemProps) => {
    return (
      <>
        <ExpeYear>
          {iconType === 'school' ? <SchoolIcon /> : <WorkIcon />}
          {year}
        </ExpeYear>
        <ExpeTitle>{title}</ExpeTitle>
        <ExpeText>{content}</ExpeText>
      </>
    )
  }

  return (
    <Layout>
      <EachWrap>
        <Title>Experience</Title>
        <ExpeLayout>
          <ExpeWrap>
            <ExpeLine />
            <ExpeTextWrap>
              {_renderExpeItem({
                year: '2019 - 2020',
                title: '미래능력개발교육원',
                content: `- 영화 (React-native)

- 쇼핑몰 블루베리 (Web)

- 알급 (Android)
Service를 통한 백그라운드 아르바이트 시간 알람 기능 구현

- 캐치마인드 (Java)
소켓 통신을 통한 마우스 클릭 좌표와 채팅 내용을 실시간 공유 기능 구현

- 미세먼지 알림이 (Android)
API 호출을 통해 가져온 날씨 Json 데이터를 사용자에게 보기 편한 UI로 변경 작업`,
              })}
            </ExpeTextWrap>
          </ExpeWrap>
          <ExpeWrap>
            <ExpeLine />
            <ExpeTextWrap>
              {_renderExpeItem({
                year: '2020 - 2021',
                title: '(주)에스브이',
                content: `- 먼슬리키친 (React-native)
상품 및 결제 관련 플로우 기능 구현

- 인생네컷 (React-native)
인스타그램의 사진 필터 및 편집 기능 WebGL을 통해 RN에서 기능 구현

- 스탠다드 패스 (React-native)
기존에 모든 바코드를 촬영하던 로직을 변경해 Datamatrix, QRcode 타입만 자동 인식하도록 수정

- 도소디 (React-native)
페이징 로직을 변경하여 최소한의 API를 호출하도록 변경하여 성능 향상

- 사구와로 (React-native)
기초 설계와 타입 스크립트를 도입함으로써 유지 보수 기간 단축
`,
                iconType: 'work',
              })}
            </ExpeTextWrap>
          </ExpeWrap>
        </ExpeLayout>
      </EachWrap>
    </Layout>
  )
}

const showFrame = keyframes`
  0% { 
    transform: translateY(60px);
    opacity: 0;
  },
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
const showAnimation = css`
  animation: 0.6s ${showFrame} ease-in-out;
`
const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  width: 100%;
  max-width: ${({theme}) => `${theme.size.desktop}px`};
  height: 100%;
  padding: 40px 12px;
`
const EachWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ExpeLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  padding: 16px;
  margin-top: 24px;
  ${({theme}) => theme.media.tablet`
      grid-template-columns: repeat(1, 1fr);
  `}
`
const ExpeWrap = styled.div`
  display: flex;
  height: min-content;
  background: white;
  padding: 24px;
  box-shadow: 1px 1px 32px #dddddd;
  border-radius: 16px;
  ${showAnimation}
`
const ExpeLine = styled.div`
  min-width: 2px;
  background: ${({theme}) => theme.color.default.red}; // ${({theme}) => theme.color.background.primary};
  border-radius: 32px;
  margin-right: 24px;
`
const ExpeTextWrap = styled.span`
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
`
const ExpeYear = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({theme}) => theme.color.font.light};
  margin-top: 20px;
`
const IconStyle = css`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  color: ${({theme}) => theme.color.default.red};
`
const WorkIcon = styled(IonIcons.Briefcase)`
  ${IconStyle}
`
const SchoolIcon = styled(IonIcons.School)`
  ${IconStyle}
`
const ExpeTitle = styled.span`
  position: relative;
  font-weight: 900;
  font-size: 20px;
  color: ${({theme}) => theme.color.font.primary};
  margin-bottom: 16px;
`
const ExpeText = styled.span`
  font-size: 14px;
  color: ${({theme}) => theme.color.font.light};
  white-space: pre-wrap;
  margin-bottom: 12px;
`

export default Experience

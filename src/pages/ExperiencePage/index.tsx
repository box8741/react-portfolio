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

  // - 영화 (React-native)

  // - 쇼핑몰 블루베리 (Web)

  // - 알급 (Android)
  // Service를 통한 백그라운드 아르바이트 시간 알람 기능 구현

  // - 캐치마인드 (Java)
  // 소켓 통신을 통한 마우스 클릭 좌표와 채팅 내용을 실시간 공유 기능 구현

  // - 미세먼지 알림이 (Android)
  // API 호출을 통해 가져온 날씨 Json 데이터를 사용자에게 보기 편한 UI로 변경 작업

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
                content: `안드로이드 웹 앱 콘텐츠 개발자
                
# 작업기초능력
  - 정보능력
  - 기술능력

# 기초 프로그래밍 언어
  - 프로그래밍 언어 활용

# 객체지향 프로그래밍
  - 비 NCS 교과

# 응용 소프트웨어 개발기초
  - 응용 SW 기초 기술 활용

# 응용 소프트웨어 구현 테스트 및 배포
  - 개발자 테스트
  - 애플리케이션 테스트 수행
  - 애플리케이션 배포

# 안드로이드 네이티브 앱 제작
  - 앱 프로그래밍

# Material 적용 앱 제작 및 배포
  - 비 NCS 교과

# 웹 UI 구현
  - 화면 구현

# 웹 프로그래밍
  - 애플리케이션 구현

# 하이브리드 앱 제작
  - UI 구현
`,
              })}
            </ExpeTextWrap>
          </ExpeWrap>
          <ExpeWrap>
            <ExpeLine />
            <ExpeTextWrap>
              {_renderExpeItem({
                year: '2020 - 2021',
                title: '(주)에스브이',
                content: `- 먼슬리 키친 (React-native)
결제 관련 플로우 기능 구현 및 예외 처리 작업
상품 주문정보 목록 갱신을 위한 주문, 취소 등 특정 이벤트 발생 시 동기화 작업
Root Siblings 을 이용한 알림 창 모듈화 구현
FCM을 통한 특정 페이지 이동을 위해 Deep Linking 구현

- 인생네컷 (React-native)
Android, iOS 권한 요청 모듈화 구현
인스타그램의 사진 필터 기능처럼 WebGL을 통해 구현

- 스탠다드 패스 (React-native)
바코드 촬영 Datamatrix, QR code 타입만 인식하도록 구현
앱 언어 설정 변경에 따라 앱 전체 글씨 변경 기능 구현
디바이스에 설정되어 있는 언어에 따라 스탠다드 패스 언어 변경 구현
특정 언어에 따라 I18nManager를 사용해 언어 RTL 작업

- 모두의 신상 (React-native)
전체 목록 개수와 현재 목록 개수를 계산해 최소한 호출로 페이징 처리 작업
JWT 토큰 관리를 위한 refresh Token 별도 저장 및 토큰 갱신 구현
정렬, 이미지 추가, 글씨 작성이 가능한 상품 등록 기능 구현

- 싸이페어 (React-native)
FCM 관련 설정 이슈 수정 작업
박람회 작성에 링크 기능 추가 작업
UI/UX 개선 및 추가 작업
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
  min-height: 100%;
  justify-content: center;
  align-items: center;
`
const EachWrap = styled.div`
  display: flex;
  max-width: ${({theme}) => `${theme.size.desktop}px`};
  flex-direction: column;
  justify-content: center;
  margin: 30px 12px;
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

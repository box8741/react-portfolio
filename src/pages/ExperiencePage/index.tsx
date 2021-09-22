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
                content: `# 모두의 신상 (React-native)
 - 무한 스크롤 로직에서 빈 데이터를 받게 되면 마지막 페이지라고 인식하는 로직을 변경해 백에서 보내주는 전체 목록 개수와 프론트가 가지고 있는 목록 개수를 비교해 최소한의 API 호출로 데이터를 가져오도록 변경 작업
 - JWT Access Token 관리를 위해 Refresh Token 을 로컬 저장소에 저장한 후 Access Token 이 기간이 만료되었을 경우 저장해 두었던 Refresh Token 을 사용해 Access Token 갱신 작업 구현
 - 텍스트 작성 및 정렬, 이미지 추가가 가능한 상품 등록 UI 및 기능 구현

# 스탠다드 패스 (React-native)
 - 효율적인 바코드 인식을 위해 기존에 모든 타입의 바코드를 인식하는 기능에서 특정 Datamatrix, QR code 타입만 인식하도록 기능 변경
 - 다국어 지원을 위해 사용자 계정의 언어 설정에 따라 앱에서 표시하는 모든 텍스트 변경 기능 구현
 - 디바이스에 설정되어 있는 언어에 맞춰 스탠다드 패스 앱 언어 변경 시스템 구현
 - 아랍어의 경우 오른쪽에서 왼쪽으로 언어를 읽기 때문에 I18nManager 기능을 사용해 RTL 작업

# 인생네컷 (React-native)
 - 반복되는 앱 권한 코드 작성을 개선 및 유지 보수를 위해 권한 요청 컴포넌트 분리 작업
 - 인스타그램의 사진 수정 기능처럼 사진에 색상 필터 작업을 하기  위해 WebGL 관련 라이브러리를 사용해 기능 구현

# 싸이페어 (React-native)
 - 하이퍼링크 관련 라이브러리를 통해 사용자가 게시글에 텍스트  입력 후 저장할 경우 인터넷 주소, 이메일 등 자동으로 하이퍼링크가 생기도록 작업
 - Android, IOS 스플래시 화면 및 앱 아이콘 변경 작업
 - UI/UX 개선 및 추가 작업

# 먼슬리키친 (React-native)
 - 상품 주문정보 데이터 갱신을 위해 상품 주문, 상품 취소 등 API 호출 이벤트 발생 시 Redux-saga에서 상품 주문정보 API 자동 호출 되도록 작업
 - 중첩이 되지 않고 하나의 Modal만 나오던 기능에서 Root Siblings 라이브러리를 사용해 중첩 가능하도록 변경
 - FCM을 통해 특정 화면 이동을 위해 Deep Linking 기능 구현
 - 결제 관련 플로우 기능 구현 및 예외 처리 작업
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
  flex: 1;
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

import * as React from 'react'
import _ from 'lodash'
import styled, {css, keyframes} from 'styled-components'
import * as IonIcons from 'styled-icons/ionicons-outline'

import mkConst from '../../common/constants'
import action from '../../redux/action'
import {useAppSelector, useAppDispatch} from '../../hooks/useRedux'
import {Title, Modal} from '../../components'
import {workList, WorkProps} from '../../mock'

interface ModalLayoutProps {
  title?: string
  period?: string
  people?: number
  role?: string
  env?: string
  path?: {name: string; path: string}[]
  desc?: string
  img?: string[]
}

const WorksPage = () => {
  const [tabIndex, setTabIndex] = React.useState(0)
  const [isVisible, setVisible] = React.useState(false)
  const [selectWork, setSelectWork] = React.useState<WorkProps>()
  const tabList = [{name: 'All'}, {name: 'React'}, {name: 'React-native'}, {name: 'Android'}]

  const workFilterList = React.useMemo(() => {
    return workList.filter((i, j) => {
      if (tabList[tabIndex].name === 'All') return true
      return i.type === tabList[tabIndex].name
    })
  }, [tabIndex])

  const _modalLayout = (props: ModalLayoutProps) => {
    const {title, period, people, role, env, path, desc, img} = props
    return (
      <SwitchLayout>
        <SwitchTopWrap>
          <SwitchProject>PROJECT</SwitchProject>
          <SwitchCloseBtn onClick={() => setVisible(false)} />
        </SwitchTopWrap>
        <SwitchHorizonLineBlue style={{marginBottom: '18px'}} />
        <SwitchGridLayout>
          <SwitchInfoLayout>
            <SwitchTitle>{title}</SwitchTitle>
            <SwitchPeriod>{period}</SwitchPeriod>
            <SwitchPeople>{people}명</SwitchPeople>
            <SwitchRole>{role}</SwitchRole>
            <SwitchEnv>{env}</SwitchEnv>
            {path?.map((each, index) => {
              return (
                <SwitchPath key={index}>
                  {each.name}
                  <a target="_Blink" href={each.path}>
                    {each.path}
                  </a>
                </SwitchPath>
              )
            })}
            <SwitchHorizonLine />
            <SwitchDesc>{desc}</SwitchDesc>
          </SwitchInfoLayout>
          <SwitchImageLayout>
            {img?.map((src, index) => {
              return <SwitchImg key={index} src={src} />
            })}
          </SwitchImageLayout>
        </SwitchGridLayout>
        <SwitchHorizonLineBlue style={{margin: '18px 0'}} />
      </SwitchLayout>
    )
  }

  const switchModalRender = () => {
    switch (selectWork?.title) {
      case 'monthly':
        return _modalLayout({
          title: '먼슬리키친 (React Native)',
          period: '2020.07 ~ 2020.12',
          people: 5,
          role: '프론트 개발',
          env: 'OS(Mac OS) / Language(Javascript)',
          path: [
            {name: 'Google Play : ', path: 'https://play.google.com/store/apps/details?id=com.svcorps.mkitchen'},
            {name: 'App Store : ', path: 'https://apps.apple.com/app/id1529045924'},
          ],
          desc: `먼슬리 키친은 공용 주방의 음식 배달 앱으로써 배달의 민족 앱같이
사람들이 편리하게 주문하도록 만든 앱입니다
다른 음식 배달 앱과 다른 점은 사용할 카드를 미리 앱에 등록해놓는 게 가능합니다
먼슬리 키친에 등록되어 있는 식당에서 음식들을 바로 주문하거나 장바구니에 담아서 한 번에 결제 할 수 있으며 주문한 후 배달 및 포장 등의 옵션을 선택하여 기존에 등록해놨던 카드 또는 일반 결제로 주문 가능합니다`,
          img: ['/assets/svgs/monthly_login.svg', '/assets/svgs/monthly_splash.svg'],
        })

      // case 'saguaro':
      //   return _modalLayout({
      //     title: '사구와로 (React Native)',
      //     period: '2021.05 ~ 2021.06',
      //     people: 3,
      //     role: '프론트 개발',
      //     env: 'OS(Mac OS) / Language(Javascript, Typescript)',
      //     // path: [
      //     //   {name: 'Google Play : ', path: 'https://play.google.com/store/apps/details?id=com.svcorps.mkitchen'},
      //     //   {name: 'App Store : ', path: 'https://apps.apple.com/app/id1529045924'},
      //     // ],
      //     desc: `여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다
      // 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다
      // 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다`,
      //     img: ['/assets/svgs/saguaro_login.svg', '/assets/svgs/saguaro_splash.svg'],
      //   })

      case 'dosode':
        return _modalLayout({
          title: '모두의 신상 (React Native)',
          period: '2021.03 ~ 2021.07',
          people: 3,
          role: '프론트 개발',
          env: 'OS(Mac OS) / Language(Javascript)',
          // path: [
          //   {name: 'Google Play : ', path: 'https://play.google.com/store/apps/details?id=com.svcorps.mkitchen'},
          //   {name: 'App Store : ', path: 'https://apps.apple.com/app/id1529045924'},
          // ],
          desc: `모두의 신상은 도매, 소매, 디자이너 총 3개로 이루어진 쇼핑몰 앱입니다
디자이너 앱에서 상품을 등록하면 관리자에서 상품에 대한 가격을 측정한 후 도매에 먼저 올라가게 되며 도매에서 최대 수량을 넘을 경우 소매에서도 상품이 올라오는 시스템입니다
디자이너가 올린 상품을 도매, 소매 앱에서 대량 구매가 가능하며 도매의 경우 최소 수량 이상만 구매 할 수 있습니다`,
          img: ['/assets/svgs/dosode_de_login.svg', '/assets/svgs/dosode_so_login.svg'],
        })

      case 'standard':
        return _modalLayout({
          title: '스탠다드 패스 (React Native)',
          period: '2020.12 ~ 2021.04',
          people: 3,
          role: '프론트 개발, 유지보수',
          env: 'OS(Mac OS) / Language(Javascript)',
          // path: [
          //   {name: 'Google Play : ', path: 'https://play.google.com/store/apps/details?id=com.svcorps.mkitchen'},
          //   {name: 'App Store : ', path: 'https://apps.apple.com/app/id1529045924'},
          // ],
          desc: `스탠다드 패스는 유저 앱, 병원 앱 총 2개로 이루어진 코로나 검사 앱입니다
유저 앱의 사용자 정보를 담고 있는 QR 코드와 특정 키트를 이용해 병원 앱에서 유저 정보를 기록해둔 후 검사 결과가 나오면 유저 앱에 보내주는 방식입니다
유저는 검사 결과를 이용해 식당 같은 곳에서 카카오톡 코로나 QR 코드나 네이버 코로나 QR 코드처럼 사용할 수 있습니다
자가 진단 키트가 있다면 유저 앱을 통한 코로나 자가 진단도 가능합니다`,
          img: ['/assets/svgs/standard_user_login.svg', '/assets/svgs/standard_pro_login.svg'],
        })

      case 'life':
        return _modalLayout({
          title: '인생네컷 (React Native)',
          period: '2020.10 ~ 2021.01',
          people: 2,
          role: '프론트 개발',
          env: 'OS(Mac OS) / Language(Javascript)',
          // path: [
          //   {name: 'Google Play : ', path: 'https://play.google.com/store/apps/details?id=com.svcorps.mkitchen'},
          //   {name: 'App Store : ', path: 'https://apps.apple.com/app/id1529045924'},
          // ],
          desc: `인생네컷은 소셜 네트워크 서비스로 사진을 수정하고 공유하는 인스타그램 같은 앱입니다
게시글을 작성할 수 있고 댓글을 달며 소통이 가능하며 사진에 글씨 넣기, 필터 넣기 등 여러 가지 기능이 있습니다
특정 사용자와 친구를 맺어 서로 간의 비밀 다이어리를 만들 수 있으며 결제를 통한 꾸미기 기능을 지원합니다`,
          img: ['/assets/svgs/life_login.svg', '/assets/svgs/life_splash.svg'],
        })

      case 'cyfair':
        return _modalLayout({
          title: '싸이페어 (React Native)',
          period: '2020.07 ~ 2021.07',
          people: 3,
          role: '유지보수',
          env: 'OS(Mac OS) / Language(Javascript)',
          path: [
            {name: 'Google Play : ', path: 'https://play.google.com/store/apps/details?id=com.cyfair.app'},
            {name: 'App Store : ', path: 'https://apps.apple.com/app/id1534658993'},
          ],
          desc: `싸이 페어는 종류별로 자신의 물품 또는 업체를 홍보할 수 있는 박람회 앱입니다
사용자는 바이어, 관람객, 참가업체가 있으며 사용자에 따라서 박람회의 참가하여 자신의 업체에 대한 소개 글을 작성하거나 업체에 문의 글을 남길 수 있으며 자신이 마음에 드는 업체가 있다면 찜을 할 수 있는 기능이 있습니다`,
          img: ['/assets/svgs/cyfair_login.svg', '/assets/svgs/cyfair_login2.svg'],
        })
      default:
        return null
    }
  }

  return (
    <Layout>
      <Title>Recent Works</Title>
      {/* <TabLayout>
        {tabList.map((i, j) => (
          <TabItemWrap
            key={j}
            isSelect={tabIndex === j}
            onClick={() => {
              setTabIndex(j)
            }}
          >
            {i.name}
          </TabItemWrap>
        ))}
      </TabLayout> */}
      <WorkLayout>
        {workFilterList.map((work, index) => {
          return (
            <WorkItemRatioWrap
              key={work.project_name}
              onClick={() => {
                setSelectWork(work)
                setVisible(true)
              }}
            >
              <WorkItemWrap index={index}>
                <WorkItemThumb src={work.thum_img} />
                <WorkItemDetail>
                  <DetailCategory>{work.type}</DetailCategory>
                  <DetailText>{work.project_name}</DetailText>
                </WorkItemDetail>
              </WorkItemWrap>
            </WorkItemRatioWrap>
          )
        })}
      </WorkLayout>
      <Modal isVisible={isVisible} onHide={() => setVisible(false)}>
        {switchModalRender()}
      </Modal>
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
const showAnimation = (index: number) => css`
  animation: 0.4s ${showFrame} ease-in-out backwards ${index / 10}s;
`
const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({theme}) => `${theme.size.desktop}px`};
  height: 100%;
  flex-direction: column;
  align-self: center;
  padding: 60px 0;
`
const TabLayout = styled.ul`
  display: flex;
  margin: 36px;
  ${({theme}) => theme.media.tablet`
       display: none;
  `}
`
const TabItemWrap = styled.li<{isSelect: boolean}>`
  font-size: 16px;
  font-weight: 900;
  color: ${props => (props.isSelect ? props.theme.color.default.red : props.theme.color.background.primary)};
  margin-right: 24px;
  list-style: none;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({theme}) => theme.color.default.red};
  }
`
const WorkLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 32px;
  padding: 24px;
  ${({theme}) => theme.media.tablet`
       grid-template-columns: repeat(2, 1fr);
  `}
  ${({theme}) => theme.media.mobile`
       grid-template-columns: repeat(1, 1fr);
  `}
`
const WorkItemDetail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  border-radius: 22px;
`
const DetailCategory = styled.div`
  position: absolute;
  background: ${({theme}) => theme.color.default.red};
  padding: 4px 10px;
  border-radius: 0 0 14px 14px;
  left: 20px;
  font-size: 16px;
  color: white;
  transform: translateY(-100%);
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`
const DetailText = styled.span`
  position: absolute;
  top: 60px;
  left: 20px;
  transform: translateY(30px);
  font-size: 20px;
  font-weight: 900;
  color: white;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`
const WorkItemRatioWrap = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`
const WorkItemWrap = styled.div<{index: number}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  box-shadow: 1px 1px 16px #cccccc;
  border-radius: 22px;
  background: transparent;
  cursor: pointer;
  ${({index}) => showAnimation(index)};
  &:hover ${WorkItemDetail} {
    opacity: 1;
    background: rgba(83, 109, 254, 0.8);
  }
  &:hover ${DetailCategory} {
    transform: translateY(0);
  }
  &:hover ${DetailText} {
    transform: translateY(0);
  }
`
const WorkItemThumb = styled.img`
  width: 100%;
  height: 100%;
  padding: 18px;
  object-fit: contain;
`

// Swtich
const SwitchLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme}) => `${theme.size.desktop}px`};
`
const SwitchGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  background: ${({theme}) => theme.color.background.default};
  padding: 56px;
  border-radius: 16px;
  box-shadow: 2px 2px 32px #333333;
  ${({theme}) => theme.media.tablet`
      grid-template-columns: repeat(1, 1fr);
  `}
`
const SwitchTopWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 18px 6px 4px 6px;
`
const SwitchProject = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #64b5f6;
`
const SwitchCloseBtn = styled(IonIcons.Close)`
  width: 44px;
  height: 44px;
  color: #64b5f6;
  cursor: pointer;
`
const SwitchInfoLayout = styled.div`
  display: flex;
  flex-direction: column;
`
const SwitchImageLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({theme}) => theme.media.mobile`
      flex-direction: column;
  `}
`
const SwitchTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: ${({theme}) => theme.color.font.primary};
  margin-bottom: 48px;
`
const SwitchPeriod = styled.span`
  font-size: 16px;
  color: ${({theme}) => theme.color.font.primary};
  &::before {
    content: '개발기간 : ';
    font-weight: bold;
  }
`
const SwitchPeople = styled.span`
  font-size: 16px;
  color: ${({theme}) => theme.color.font.primary};
  &::before {
    content: '개발인원 : ';
    font-weight: bold;
  }
`
const SwitchRole = styled.span`
  font-size: 16px;
  color: ${({theme}) => theme.color.font.primary};
  &::before {
    content: '담당역활 : ';
    font-weight: bold;
  }
`
const SwitchEnv = styled.span`
  font-size: 16px;
  color: ${({theme}) => theme.color.font.primary};
  &::before {
    content: '개발환경 : ';
    font-weight: bold;
  }
`
const SwitchPathWrap = styled.div`
  margin-top: 4px;
  font-size: 14px;
  font-weight: bold;
  color: ${({theme}) => theme.color.font.primary};
  a {
    font-weight: normal;
  }
  &::before {
    font-size: 16px;
    content: '어플 다운경로 : ';
  }
`
const SwitchPath = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: ${({theme}) => theme.color.font.primary};
  a {
    font-weight: normal;
  }
`
const SwitchDesc = styled.span`
  font-size: 14px;
  color: ${({theme}) => theme.color.font.primary};
  white-space: normal;
`
const SwitchImg = styled.img`
  width: 100%;
  max-width: 160px;
  object-fit: contain;
  :nth-child(1) {
    margin-right: 32px;
    ${({theme}) => theme.media.mobile`
      margin-right: 0px;
      margin-bottom: 24px
    `}
  }
`
const SwitchHorizonLine = styled.hr`
  width: 100%;
  height: 1px;
  background: black;
  border-width: 0;
  margin: 28px 0;
`
const SwitchHorizonLineBlue = styled.hr`
  width: 100%;
  height: 2px;
  background: #64b5f6;
  border-width: 0;
  border-radius: 30px;
  margin: 0;
`

export default WorksPage

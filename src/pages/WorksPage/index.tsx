import * as React from 'react'
import _ from 'lodash'
import styled, {css, keyframes} from 'styled-components'
import * as IonIcons from 'styled-icons/ionicons-outline'

import mkConst from '../../common/constants'
import action from '../../redux/action'
import {useAppSelector, useAppDispatch} from '../../hooks/useRedux'
import {Title, Modal} from '../../components'
import {workList, WorkProps} from '../../mock'

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

  const _monthly = () => {
    return (
      <SwitchLayout>
        <SwitchTopWrap>
          <SwitchProject>PROJECT</SwitchProject>
          <SwitchCloseBtn onClick={() => setVisible(false)} />
        </SwitchTopWrap>
        <SwitchHorizonLineBlue style={{marginBottom: '18px'}} />
        <SwitchGridLayout>
          <SwitchInfoLayout>
            <SwitchTitle>먼슬리키친(React Native)</SwitchTitle>
            <SwitchPeriod>2019.11 ~ 2019.20</SwitchPeriod>
            <SwitchPeople>3명</SwitchPeople>
            <SwitchRole>프론트 개발, 유지보수</SwitchRole>
            <SwitchEnv>OS(Mac OS) / Development Tool(VSC, NPM, yarn)</SwitchEnv>
            <SwitchPath>{`
Google Play : https://naver.com
App Store : https://naver.com
`}</SwitchPath>
            <SwitchHorizonLine />
            <SwitchDesc>
              {`여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다
여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다
여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다
여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다 여기에는 설명이 들어갑니다`}
            </SwitchDesc>
          </SwitchInfoLayout>
          <SwitchImageLayout>
            <SwitchImg src={'/assets/images/monthly_login.png'} />
            <SwitchImg src={'/assets/images/monthly_login.png'} />
          </SwitchImageLayout>
        </SwitchGridLayout>
        <SwitchHorizonLineBlue style={{margin: '18px 0'}} />
      </SwitchLayout>
    )
  }

  const switchModalRender = () => {
    switch (selectWork?.title) {
      case 'monthly':
        return _monthly()
      case 'saguaro':
        return _monthly()
      case 'dosode':
        return _monthly()
      case 'standard':
        return _monthly()
      case 'life':
        return _monthly()
      default:
        return null
    }
  }

  return (
    <Layout>
      <Title>Recent Works</Title>
      <TabLayout>
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
      </TabLayout>
      <WorkLayout>
        {workFilterList.map((work, index) => {
          return (
            <WorkItemWrap
              onClick={() => {
                setSelectWork(work)
                setVisible(true)
              }}
              key={work.project_name}
              index={index}
            >
              <WorkItemThumb src={work.thum_img} />
              <WorkItemDetail>
                <DetailCategory>{work.type}</DetailCategory>
                <DetailText>{work.project_name}</DetailText>
              </WorkItemDetail>
            </WorkItemWrap>
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
  flex-direction: column;
  align-self: center;
  margin: 60px 0;
`
const TabLayout = styled.ul`
  display: flex;
  margin: 36px 0;
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
const WorkItemWrap = styled.div<{index: number}>`
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 1px 1px 16px #cccccc;
  background: transparent;
  cursor: pointer;
  aspect-ratio: 1;
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
const SwitchPath = styled.span`
  font-size: 16px;
  color: ${({theme}) => theme.color.font.primary};
  white-space: pre-wrap;
  margin-top: 8px;
  &::before {
    content: '어플 다운경로 : ';
    font-weight: bold;
  }
`
const SwitchDesc = styled.span`
  font-size: 14px;
  color: ${({theme}) => theme.color.font.primary};
  white-space: pre-wrap;
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

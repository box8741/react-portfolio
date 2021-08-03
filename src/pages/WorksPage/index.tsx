import * as React from 'react'
import _ from 'lodash'
import styled, {css, keyframes} from 'styled-components'

import mkConst from '../../common/constants'
import action from '../../redux/action'
import {useAppSelector, useAppDispatch} from '../../hooks/useRedux'
import {Title, Modal} from '../../components'
import {workList} from '../../mock'

const WorksPage = () => {
  const [tabIndex, setTabIndex] = React.useState(0)
  const [isVisible, setVisible] = React.useState(false)
  const tabList = [{name: 'All'}, {name: 'React'}, {name: 'React native'}, {name: 'Android'}]

  const workFilterList = React.useMemo(() => {
    return workList.filter((i, j) => {
      if (tabList[tabIndex].name === 'All') return true
      return i.type === tabList[tabIndex].name
    })
  }, [tabIndex])

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
            <WorkItemWrap onClick={() => setVisible(true)} key={work.project_name} index={index}>
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
        <div>11111</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>11111</div>
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

export default WorksPage

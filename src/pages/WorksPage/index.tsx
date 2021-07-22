import {useState} from 'react'
import {} from '@material-ui/core'
import styled, {css, keyframes} from 'styled-components/macro'

import mkConst from '../../common/constants'
import theme from '../../theme/marterialTheme'
import {Title} from '../../components'
import {workList} from '../../mock'

const WorksPage = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const tabList = [{name: 'All'}, {name: 'React'}, {name: 'React native'}, {name: 'Android'}]

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
        {workList
          .filter((i, j) => {
            if (tabList[tabIndex].name === 'All') return true
            return i.type === tabList[tabIndex].name
          })
          .map((work, index) => {
            return (
              <WorkItemWrap key={work.project_name}>
                <WorkItemThumb src={work.thum_img} />
                <WorkItemDetail>
                  <DetailCategory>{work.type}</DetailCategory>
                  <DetailText>{work.project_name}</DetailText>
                </WorkItemDetail>
              </WorkItemWrap>
            )
          })}
      </WorkLayout>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme}) => `${theme.size.desktop}px`};
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
  color: ${props => (props.isSelect ? '#ec5a65' : props.theme.color.background.primary)};
  margin-right: 24px;
  list-style: none;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #ec5a65;
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
  background: #ec5a65;
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
const WorkItemWrap = styled.div`
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 1px 1px 16px #cccccc;
  background: transparent;
  cursor: pointer;
  aspect-ratio: 1;
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

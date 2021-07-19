import {useState} from 'react'
import {} from '@material-ui/core'
import styled, {css, keyframes} from 'styled-components/macro'

import mkConst from '../../common/constants'
import theme from '../../theme/marterialTheme'
import {Title} from '../../components'

const WorksPage = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const tabMock = [{name: 'Everything'}, {name: 'Creative'}, {name: 'Art'}, {name: 'Design'}, {name: 'Branding'}]
  const workMock = [
    {thum_img: '/assets/svgs/standard_main.svg'},
    {thum_img: '/assets/images/monthly_main.png'},
    {thum_img: '/assets/svgs/life_main.svg'},
    {thum_img: '/assets/svgs/dosode_main.svg'},
  ]

  return (
    <Layout>
      <Title style={{marginTop: '80px'}}>Recent Works</Title>
      <TabLayout>
        {tabMock.map((i, j) => (
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
        {workMock.map((i, j) => {
          return (
            <WorkItemWrap key={j}>
              <WorkItemThumb src={i.thum_img} />
              <WorkItemDetail>
                <DetailCategory>Art</DetailCategory>
                <DetailText>Project Managment</DetailText>
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
  max-width: 1024px;
  min-height: 100%;
  align-self: center;
  padding-top: 24px;
`
const TabLayout = styled.ul`
  display: flex;
  margin: 36px 0;
  ${({theme}) => theme.media.tablet`
       display: none;
  `}
  ${({theme}) => theme.media.mobile`
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
  grid-auto-rows: minmax(0, 300px);
  grid-gap: 32px;
  padding: 24px;
  ${({theme}) => theme.media.tablet`
       grid-template-columns: repeat(2, minmax(auto, 100%));
  `}
  ${({theme}) => theme.media.mobile`
       grid-template-columns: repeat(1, minmax(auto, 100%));
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

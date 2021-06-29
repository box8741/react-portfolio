import {useState} from 'react'
import {} from '@material-ui/core'
import styled, {css, keyframes} from 'styled-components/macro'

import mkConst from '../../common/constants'
import theme from '../../theme/marterialTheme'
import {Title} from '../../components'

const WorksPage = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [workAniIndex, setWorkAniIndex] = useState(-1)
  const tabDummy = [{name: 'Everything'}, {name: 'Creative'}, {name: 'Art'}, {name: 'Design'}, {name: 'Branding'}]

  return (
    <Layout>
      <Title>Recent Works</Title>
      <TabLayout>
        {tabDummy.map((i, j) => (
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
        {[1, 2, 3, 4, 5].map((i, j) => {
          const isHover = workAniIndex === j
          return (
            <WorkItemWrap onMouseEnter={() => setWorkAniIndex(j)} onMouseLeave={() => setWorkAniIndex(-1)} key={j}>
              <WorkItemThumb src={'https://cdn.pixabay.com/photo/2020/04/06/13/37/coffee-5009730_1280.png'} />
              <WorkItemDetail>
                <DetailCategory isHover={isHover}>Art</DetailCategory>
                <DetailText isHover={isHover}>Project Managment</DetailText>
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
  width: 90%;
  min-height: 100vh;
  align-self: center;
  padding-top: 24px;
`
const TabLayout = styled.ul`
  display: flex;
  margin: 20px 0;
`
const TabItemWrap = styled.li<{isSelect: boolean}>`
  font-size: 16px;
  font-weight: 900;
  color: ${props => (props.isSelect ? '#ec5a65' : theme.palette.primary.main)};
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
  margin: 24px;
`
const WorkItemWrap = styled.div`
  position: relative;
  height: 250px;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 1px 1px 16px #cccccc;
  background: transparent;
  cursor: pointer;
`
const WorkItemThumb = styled.img`
  width: 100%;
  height: 100%;
`
const WorkItemDetail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1;
    background: rgba(83, 109, 254, 0.8);
  }
`
const DetailCategory = styled.div<{isHover: boolean}>`
  position: absolute;
  background: #ec5a65;
  padding: 4px 10px;
  border-radius: 0 0 14px 14px;
  left: 20px;
  font-size: 16px;
  color: white;
  transform: translateY(-100%);
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  ${props =>
    props.isHover &&
    css`
      transform: translateY(0);
    `}
`
const DetailText = styled.span<{isHover: boolean}>`
  position: absolute;
  top: 60px;
  left: 20px;
  transform: translateY(30px);
  font-size: 20px;
  font-weight: 900;
  color: white;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  ${props =>
    props.isHover &&
    css`
      transform: translateY(0);
    `}
`

export default WorksPage

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
      <Title>Experience</Title>
      <ExpeLayout>
        <ExpeWrap>
          <ExpeLine />
          <ExpeTextWrap>
            {_renderExpeItem({
              year: '2004 - 2009',
              title: '영서초등학교',
            })}
            {_renderExpeItem({
              year: '2010 - 2012',
              title: '영서중학교',
            })}
            {_renderExpeItem({
              year: '2013 - 2015',
              title: '구로고등학교',
            })}
          </ExpeTextWrap>
        </ExpeWrap>
        <ExpeWrap>
          <ExpeLine />
          <ExpeTextWrap>
            {_renderExpeItem({
              year: '2020 - 2021',
              title: '(주)에스브이',
              content: `Lorem ipsum dolor sit 
amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quoei simul congue exerci ad nec admodum perfecto.`,
              iconType: 'work',
            })}
          </ExpeTextWrap>
        </ExpeWrap>
      </ExpeLayout>
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
  flex-direction: column;
  width: 100%;
  max-width: ${({theme}) => `${theme.size.desktop}px`};
  align-self: center;
  padding: 40px 12px;
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
  font-size: 16px;
  color: ${({theme}) => theme.color.font.light};
  word-break: normal;
  margin-bottom: 12px;
`

export default Experience

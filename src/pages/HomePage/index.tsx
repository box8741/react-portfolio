import * as React from 'react'
import _ from 'lodash'
import styled, {keyframes} from 'styled-components'
import * as IonIcon from 'styled-icons/ionicons-solid'
import {IconButton} from '@material-ui/core'

import mkConst from '../../common/constants'
import action from '../../redux/action'
import {useAppSelector, useAppDispatch} from '../../hooks/useRedux'

const SamplePage = () => {
  const [index, setIndex] = React.useState(0)
  const [isReverse, setReverse] = React.useState(false)
  // const [isCursor, setCursor] = React.useState(true)
  const subTitle = 'Front-End developer'
  const aniSubTitle = React.useMemo(() => `I'm a ` + subTitle.substring(0, index), [index])

  React.useEffect(() => {
    const writerInterval = setInterval(() => {
      if (!isReverse) {
        if (subTitle.length - 1 >= index) {
          setIndex(index + 1)
        } else setReverse(true)
      } else {
        if (index > 0) {
          setIndex(index - 1)
        } else setReverse(false)
      }
    }, (Math.random() + 1) * 100)
    return () => clearInterval(writerInterval)
  }, [index, isReverse])

  // React.useEffect(() => {
  //   const cursurInterval = setInterval(() => {
  //     if (subTitle.length - 1 <= index) setCursor(!isCursur)
  //   }, 500)
  //   return () => clearInterval(cursurInterval)
  // }, [index, isCursor])

  return (
    <Layout>
      <EachWrap>
        <ProfileImg src={'/assets/svgs/avatar.svg'} />
        <Title>Minkuk Park</Title>
        <SubTitle>{aniSubTitle}</SubTitle>
        <IconButton target="_Blink" href="https://github.com/box8741">
          <GithubIcon />
        </IconButton>
      </EachWrap>
    </Layout>
  )
}

const CursurAnimation = keyframes`
  0%{opacity : 0}
  50%{opacity : 1}
  100%{opacity : 0}
`
const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  background: ${({theme}) => theme.color.background.primary};
`
const EachWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ProfileImg = styled.img`
  width: 140px;
  height: 140px;
  margin-right: 10px;
`
const Title = styled.span`
  font-size: 38px;
  font-weight: 900;
  color: white;
`
const SubTitle = styled.span`
  font-size: 18px;
  color: white;
  margin-bottom: 24px;
  &::after {
    content: '|';
    animation: ${CursurAnimation} 0.8s ease-in-out infinite;
  }
`
const GithubIcon = styled(IonIcon.LogoGithub)`
  width: 32px;
  height: 32px;
  color: white;
`
export default React.memo(SamplePage)

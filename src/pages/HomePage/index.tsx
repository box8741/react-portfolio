import {useEffect, useState, useMemo} from 'react'
import {IconButton} from '@material-ui/core'
import * as Icon from '@material-ui/icons'
import styled, {keyframes} from 'styled-components/macro'

import mkConst from '../../common/constants'
import theme from '../../theme/marterialTheme'

const SamplePage = () => {
  const [index, setIndex] = useState(0)
  const [isReverse, setReverse] = useState(false)
  // const [isCursor, setCursor] = useState(true)
  const subTitle = 'Front-End developer'
  const aniSubTitle = useMemo(() => `I'm a ` + subTitle.substring(0, index), [index])

  useEffect(() => {
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

  // useEffect(() => {
  //   const cursurInterval = setInterval(() => {
  //     if (subTitle.length - 1 <= index) setCursor(!isCursur)
  //   }, 500)
  //   return () => clearInterval(cursurInterval)
  // }, [index, isCursor])

  return (
    <Layout>
      <ProfileImg src={'/assets/images/avatar.png'} />
      <Title>Minkuk Park</Title>
      <SubTitle>{aniSubTitle}</SubTitle>
      <IconButton target="_Blink" href="https://github.com/box8741/react-portfolio">
        <Icon.GitHub style={{color: 'white'}} />
      </IconButton>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${theme.palette.background.default};
`
const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 18px;
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
`
const PageIcon = styled.img`
  width: 28px;
  height: 28px;
`
export default SamplePage

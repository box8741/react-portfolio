import * as React from 'react'
import _ from 'lodash'
import styled, {keyframes} from 'styled-components'
import * as IonIcon from 'styled-icons/ionicons-solid'
import * as BoxIcon from 'styled-icons/boxicons-logos'
import {IconButton} from '@material-ui/core'

import mkConst from '../../common/constants'
import mkUtils from '../../common/utils'
import action from '../../redux/action'
import {useAppSelector, useAppDispatch} from '../../hooks/useRedux'
import {Modal} from '../../components'

import avatarSvg from '../../assets/svgs/avatar.svg'

const SamplePage = () => {
  const [index, setIndex] = React.useState(0)
  const [isReverse, setReverse] = React.useState(false)
  // const [isCursor, setCursor] = React.useState(true)
  const [isDownloadVisibile, setDownloadVisible] = React.useState(false)
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
        <ProfileImg src={avatarSvg} />
        <Title>Minkuk Park</Title>
        <SubTitle>{aniSubTitle}</SubTitle>
        <LinkLayout>
          <IconButton target="_Blink" href="https://github.com/box8741">
            <GithubIcon />
          </IconButton>
        </LinkLayout>
        {!mkUtils.isMobile && <Download onClick={() => setDownloadVisible(true)}>Download</Download>}
      </EachWrap>

      <Modal isVisible={isDownloadVisibile} onHide={() => setDownloadVisible(false)}>
        <ModalLayout>
          <ModalTitle>Download</ModalTitle>
          <ModalItemLayout download href="/assets/downloads/Min-Portfolio.exe">
            <WindowsIcon />
            Windows
          </ModalItemLayout>
          <ModalItemLayout download href="/assets/downloads/Min-Portfolio.exe">
            <AppleIcon />
            Mac
          </ModalItemLayout>
        </ModalLayout>
      </Modal>
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
  min-height: 100%;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.color.background.primary};
`
const Download = styled.div`
  background: red;
  padding: 8px 16px;
  border-radius: 24px;
  margin-top: 12px;
  color: white;
  background: ${({theme}) => theme.color.default.red};
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(92%);
  }
`
const EachWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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
const LinkLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const GithubIcon = styled(IonIcon.LogoGithub)`
  width: 32px;
  height: 32px;
  color: white;
`

const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 2px 2px 32px #555555;
  background: #e8eaf6;
`
const ModalTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.color.font.light};
  margin-bottom: 18px;
`
const ModalItemLayout = styled.a`
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 12px;
  background: white;
  margin-bottom: 18px;
  padding: 6px;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme}) => theme.color.font.primary};
  :last-child {
    margin-bottom: 0;
  }
  &:hover {
    border: 2px solid ${({theme}) => theme.color.font.light};
  }
`
const AppleIcon = styled(BoxIcon.Apple)`
  width: 48px;
  height: 48px;
  color: ${({theme}) => theme.color.font.light};
  margin-right: 12px;
`
const WindowsIcon = styled(BoxIcon.Windows)`
  width: 48px;
  height: 48px;
  color: ${({theme}) => theme.color.font.light};
  margin-right: 12px;
`
export default React.memo(SamplePage)

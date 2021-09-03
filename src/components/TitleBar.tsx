import * as React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
// import {ipcRenderer} from 'electron'
// 다른 해결 방안 고민 필요
const {ipcRenderer} = window.require('electron')
// const {ipcRenderer} = require('electron')

import mkConst from '../common/constants'
import mkUtils from '../common/utils'

import minimizeSvg from '../assets/svgs/minimize_icon.svg'
import maximizeSvg from '../assets/svgs/maximize_icon.svg'
import restoreSvg from '../assets/svgs/restore_icon.svg'
import closeSvg from '../assets/svgs/close_icon.svg'

const TitleBar = () => {
  const [isMaximize, setIsMaximize] = React.useState(false)

  React.useEffect(() => {
    ipcRenderer.on('isMaximized', () => setIsMaximize(true))
    ipcRenderer.on('isRestored', () => setIsMaximize(false))
  }, [])

  const onMaximize = () => {
    ipcRenderer.send('minimizeApp')
  }
  const onMaximizeRestore = () => {
    ipcRenderer.send('maximizeRestoreApp')
  }
  const onClose = () => {
    ipcRenderer.send('closeApp')
  }

  return (
    <Layout>
      <DragLayout />
      <Title>React-Portfolio</Title>
      {mkUtils.OS(window) === 'Windows' && (
        <ControlWrap>
          <MinimizeIcon onClick={onMaximize} />
          <MaximizeRestoreIcon onClick={onMaximizeRestore} isMaximize={isMaximize} />
          <CloseIcon onClick={onClose} />
        </ControlWrap>
      )}
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  height: ${mkConst.titleBarHeight}px;
  z-index: 9999;
  background: #5e5c7f;
`
const DragLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-app-region: drag;
`
const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  -webkit-user-select: none;
`
const MinimizeIcon = styled.button`
  width: 40px;
  height: 100%;
  border: none;
  outline: none;
  background: url(${minimizeSvg}) no-repeat center;
`
const MaximizeRestoreIcon = styled.button<{isMaximize: boolean}>`
  width: 40px;
  height: 100%;
  border: none;
  outline: none;
  background: ${({isMaximize}) => (isMaximize ? `url(${restoreSvg})` : `url(${maximizeSvg})`)} no-repeat center;
`
const CloseIcon = styled.button`
  width: 40px;
  height: 100%;
  border: none;
  outline: none;
  background: url(${closeSvg}) no-repeat center;
`
const ControlWrap = styled.div`
  display: flex;
  width: 120px;
  height: 100%;
  button:hover {
    background-color: gray;
  }
  ${CloseIcon}:hover {
    background-color: red;
  }
`

export default TitleBar

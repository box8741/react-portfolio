import * as React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import styled, {css, keyframes} from 'styled-components'
import * as IonIcon from '@styled-icons/ionicons-outline'

interface Props {
  children?: React.ReactNode
  isVisible?: boolean
  onHide: () => void
}

const modalRoot = document.getElementById('modal') as HTMLElement

const Modal = (props: Props) => {
  const modalElement = React.useRef(document.createElement('div')).current
  const [isShow, setShow] = React.useState<boolean | undefined>()

  React.useEffect(() => {
    modalRoot.appendChild(modalElement)
    return () => {
      modalRoot.removeChild(modalElement)
    }
  }, [])

  React.useEffect(() => {
    setShow(props.isVisible)
  }, [props.isVisible])

  const onHandleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShow(false)
    props.onHide()
  }

  return ReactDOM.createPortal(
    <Layout className={`${isShow ? 'fadeIn' : 'fadeOut'}`} onClick={onHandleClick}>
      <ContentLayout onClick={e => e.stopPropagation()}>{props.children}</ContentLayout>
    </Layout>,
    modalElement
  )
}

const Layout = styled.div`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  transition: visibility 0.2s ease-in-out, opacity 0.2s ease-in-out;
  &.fadeIn {
    visibility: visible;
    opacity: 1;
  }
  &.fadeOut {
    visibility: hidden;
    opacity: 0;
  }
`
const ContentLayout = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-height: 100%;
`

export default Modal

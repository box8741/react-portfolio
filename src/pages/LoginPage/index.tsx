import {useState} from 'react'
import {TextField} from '@material-ui/core'
import {RouteComponentProps, Link} from 'react-router-dom'
import styled, {css, keyframes} from 'styled-components'

import theme from '../../theme'

import mkConst from '../../common/constants'

const LoginPage = (props: RouteComponentProps) => {
  const [cert, setCert] = useState('')
  const certSuccess = 'min'
  return (
    <Layout>
      <LoginLayout>
        <LoginTitle>Portfolio</LoginTitle>
        <TextField value={cert} onChange={({target: {value}}) => setCert(value)} type="password" label="인증번호" variant="outlined" />
        <LoginButton
          onClick={() => {
            if (cert !== certSuccess) alert('인증번호가 일치하지 않습니다.')
            // else props.history.push('/main')
            else window.location.href = '/main'
          }}
        >
          접속하기
        </LoginButton>
      </LoginLayout>
    </Layout>
  )
}
const fadeIn = keyframes`
  0% { 
    transform: translateY(120px);
    opacity: 0;
  },
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
const showAnimation = css`
  animation: 800ms ${fadeIn} ease-in-out;
`
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#212121 60%, #484848 40%);
`
const LoginLayout = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 400px;
  background: #cccccc;
  padding: 18px;
  border-radius: 16px;
  box-shadow: 6px 6px 16px #333333;
  ${showAnimation}
`
const LoginTitle = styled.span`
  font-size: 48px;
  font-weight: 500;
  text-align: center;
  margin: 36px 0px;
`
const LoginButton = styled.a`
  display: flex;
  justify-content: center;
  background: #212121;
  padding: 12px;
  border-radius: 8px;
  margin-top: 18px;
  color: white;
  transition: background 200ms;
  &:hover {
    background: #484848;
  }
`

export default LoginPage

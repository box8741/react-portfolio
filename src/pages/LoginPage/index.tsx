import * as React from 'react'
import _ from 'lodash'
import styled, {css, keyframes} from 'styled-components'
import {TextField} from '@material-ui/core'
import {RouteComponentProps} from 'react-router-dom'

import mkConst from '../../common/constants'
import action from '../../redux/action'
import {useAppSelector, useAppDispatch} from '../../hooks/useRedux'

const LoginPage = (props: RouteComponentProps) => {
  const [cert, setCert] = React.useState('')

  const certSuccess = 'min'
  return (
    <Layout>
      <LoginLayout>
        <LoginTitle>Portfolio</LoginTitle>
        <TextField
          value={cert}
          onChange={({target: {value}}) => setCert(value)}
          type="password"
          label="인증번호"
          variant="outlined"
        />
        <LoginButton
          onClick={() => {
            // if (cert !== certSuccess) alert('인증번호가 일치하지 않습니다.')
            props.history.push('/main')
            // window.location.href = '/main'
            // window.location.href = '/main'
          }}
        >
          접속하기
        </LoginButton>
      </LoginLayout>
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
  height: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    ${({theme}) => theme.color.background.primary} 60%,
    ${({theme}) => theme.color.background.default} 40%
  );
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

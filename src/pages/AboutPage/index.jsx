import {useEffect, useState, useMemo} from 'react'
import {IconButton} from '@material-ui/core'
import * as Icon from '@material-ui/icons'
import styled, {keyframes} from 'styled-components/macro'

import mkConst from '../../common/constants'
import theme from '../../theme/marterialTheme'
import {Title} from '../../components'

const AboutPage = () => {
  return (
    <Layout>
      <Title>About Me</Title>
      <InfoLayout>
        <Avatar src={'/assets/images/avatar.png'} />
        <InfoContentLayout>
          <InfoText>
            Dolore irure id do culpa proident exercitation sint sunt. Adipisicing proident ex et enim incididunt aliqua
            tempor velit. Commodo in Lorem fugiat laboris deserunt. Aliqua duis excepteur aliquip minim magna fugiat
          </InfoText>
          <InfoGraphLayout>
            <GraphItemLayout>
              <GraphItem>
                <GraphTitle>Development</GraphTitle>
                <GraphPercentText>84%</GraphPercentText>
              </GraphItem>
              <GraphItem>
                <GraphTitle>UI/UX Design</GraphTitle>
                <GraphPercentText>95%</GraphPercentText>
              </GraphItem>
            </GraphItemLayout>
          </InfoGraphLayout>
        </InfoContentLayout>
      </InfoLayout>
      <ItemLayout>
        <Item>
          <Icon.Whatshot style={{fontSize: 42, color: '#bbbbbb', marginRight: 18}} />
          <ItemTextLayout>
            <ItemNumber>356</ItemNumber>
            <ItemName>완료된 프로젝트</ItemName>
          </ItemTextLayout>
        </Item>
        <Item>
          <Icon.LocalCafe style={{fontSize: 42, color: '#bbbbbb', marginRight: 18}} />
          <ItemTextLayout>
            <ItemNumber>480</ItemNumber>
            <ItemName>마신 커피수</ItemName>
          </ItemTextLayout>
        </Item>
        <Item>
          <Icon.Whatshot style={{fontSize: 42, color: '#bbbbbb', marginRight: 18}} />
          <ItemTextLayout>
            <ItemNumber>356</ItemNumber>
            <ItemName>완료된 프로젝트</ItemName>
          </ItemTextLayout>
        </Item>
        <Item>
          <Icon.Whatshot style={{fontSize: 42, color: '#bbbbbb', marginRight: 18}} />
          <ItemTextLayout>
            <ItemNumber>356</ItemNumber>
            <ItemName>완료된 프로젝트</ItemName>
          </ItemTextLayout>
        </Item>
      </ItemLayout>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 90%;
  min-height: 100vh;
  background: ${theme.palette.background.paper};
`
const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 34px;
`
const InfoLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 32px 0px;
`
const InfoContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  max-width: 74%;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 1px 1px 32px #dddddd;
`
const InfoText = styled.div`
  display: flex;
  flex: 1;
  font-size: 18px;
  color: ${theme.palette.text.secondary};
  line-height: 28px;
  letter-spacing: 1px;
  word-break: normal;
  line-height: 28px;
  letter-spacing: 1px;
`
const InfoGraphLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const GraphItemLayout = styled.div``
const GraphItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const GraphTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.palette.primary.light};
`
const GraphPercentText = styled.span`
  font-size: 16px;
  color: ${theme.palette.primary.light};
`
const ItemLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  padding: 0px 24px;
`
const Item = styled.div`
  display: flex;
`
const ItemTextLayout = styled.div`
  display: flex;
  flex-direction: column;
`
const ItemNumber = styled.span`
  font-size: 32px;
  font-weight: 900;
  color: ${theme.palette.primary.light};
`
const ItemName = styled.span`
  font-size: 14px;
  color: ${theme.palette.primary.light};
`

export default AboutPage

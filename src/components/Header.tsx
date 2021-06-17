import {} from 'react'
import {} from '@material-ui/core'
import styled from 'styled-components/macro'

import theme from '../theme/marterialTheme'

const Header = () => {
  return (
    <Layout>
      <Content>
        <Title>Portfolio</Title>
        <ItemLayout>
          <Item>Introduce</Item>
          <Item>Project</Item>
          <Item>Skill</Item>
        </ItemLayout>
      </Content>
    </Layout>
  )
}
const Layout = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  height: 80px;
  justify-content: center;
  padding: 0px 24px;
  background: ${theme.palette.primary.main};
  box-shadow: 0px 8px 12px #333333;
`
const Content = styled.div`
  display: flex;
  flex: 1;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.span`
  font-size: 46px;
  color: white;
`
const ItemLayout = styled.div`
  display: flex;
  flex-direction: row;
`
const Item = styled.a`
  color: #888888;
  font-size: 18px;
  margin: 0px 12px;
  cursor: default;
  transition: all 160ms;
  &:hover {
    color: white;
  }
`

export default Header

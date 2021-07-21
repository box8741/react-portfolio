import {} from 'react'
import {} from '@material-ui/core'
import styled from 'styled-components/macro'

import mkConst from '../../common/constants'
import {Title} from '../../components'

const Experience = () => {
  return (
    <Layout>
      <Title>Experience</Title>
      <ExpeLayout>
        <ExpeWrap>
          <ExpeLine />
          <ExpeTextWrap>
            <ExpeTitle>
              <TitleLine />
              Experience
            </ExpeTitle>
            <ExpeText>
              Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet
              quo ei simul congue exerci ad nec admodum perfecto.
            </ExpeText>
            <ExpeTitle>
              <TitleLine />
              Experience
            </ExpeTitle>
            <ExpeText>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</ExpeText>
            <ExpeTitle>
              <TitleLine />
              Experience
            </ExpeTitle>
            <ExpeText>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</ExpeText>
          </ExpeTextWrap>
        </ExpeWrap>
        <ExpeWrap>
          <ExpeLine />
          <ExpeTextWrap>
            <ExpeTitle>
              <TitleLine />
              Experience
            </ExpeTitle>
            <ExpeText>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</ExpeText>
            <ExpeTitle>
              <TitleLine />
              Experience
            </ExpeTitle>
            <ExpeText>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</ExpeText>
            <ExpeTitle>
              <TitleLine />
              Experience
            </ExpeTitle>
            <ExpeText>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</ExpeText>
            <ExpeTitle>
              <TitleLine />
              Experience
            </ExpeTitle>
            <ExpeText>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</ExpeText>
            <ExpeTitle>
              <TitleLine />
              Experience
            </ExpeTitle>
            <ExpeText>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</ExpeText>
          </ExpeTextWrap>
        </ExpeWrap>
      </ExpeLayout>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme}) => `${theme.size.desktop}px`};
  min-height: 100vh;
  align-self: center;
  justify-content: center;
`
const ExpeLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 0 24px;
  padding: 16px;
  margin-top: 24px;
`
const ExpeWrap = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  padding: 24px;
  box-shadow: 1px 1px 32px #dddddd;
  border-radius: 16px;
`
const ExpeLine = styled.div`
  height: 100%;
  min-width: 4px;
  background: ${({theme}) => theme.color.background.primary};
  border-radius: 32px;
  margin-right: 24px;
`
const ExpeTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`
const TitleLine = styled.div`
  display: flex;
  position: absolute;
  height: 4px;
  width: 16px;
  top: 10px;
  left: -28px;
  background: ${({theme}) => theme.color.background.primary};
  border-radius: 32px;
`
const ExpeTitle = styled.span`
  position: relative;
  font-weight: 700;
  font-size: 20px;
  color: ${({theme}) => theme.color.font.primary};
  margin: 12px 0;
`
const ExpeText = styled.span`
  font-size: 16px;
  color: ${({theme}) => theme.color.font.light};
  word-break: normal;
`

export default Experience
